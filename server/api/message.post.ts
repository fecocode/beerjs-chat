import { createClerkClient } from "@clerk/clerk-sdk-node"
import admin from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  if (!admin.apps.length) {  
    initializeApp({
      credential: admin.credential.cert(JSON.parse(runtimeConfig.FIRESTORE_SERVICE_ACCOUNT_KEY)),
      databaseURL: runtimeConfig.FIRESTORE_DATABASE_ID,
    })
  }

  const request = toWebRequest(event);

  const clerk = createClerkClient({
    secretKey: runtimeConfig.CLERK_SECRET_KEY,
    publishableKey: runtimeConfig.public.CLERK_PUBLISHABLE_KEY,
  })
  try {
    const body = await readBody<{message: string}>(event)

    if (!body.message.trim().length) {
      setResponseStatus(event, 401)

      return {
        ok: false,
        error: 'No message'
      }
    }

    const verifiedSession = await clerk.authenticateRequest(request)

    if (!verifiedSession.isSignedIn) {
      setResponseStatus(event, 401)

      return {
        ok: false,
        error: 'Unauthorized'
      }
    }

    const { userId } = verifiedSession.toAuth()
    const author = await clerk.users.getUser(userId)

    const messageId = crypto.randomUUID()

    const messageToSave = {
      id: messageId,
      author_id: userId,
      author_username: author.username,
      message: body.message,
      created_at: new Date(),
    }

    await admin.firestore()
      .collection('messages')
      .doc(messageId)
      .set(messageToSave)
    
    setResponseStatus(event, 201)    
    return { ok: true }
  } catch (error) {
    console.error(error)
    setResponseStatus(event, 500)
    return {
      ok: false,
      error: 'Unexpected error'
    }
  }
})
