const conf={
    appWriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteBUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appWriteCOLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}
export default conf