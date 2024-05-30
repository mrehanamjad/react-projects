// this is production level/industrial appoach of write in config file 
// same for TypeScript

const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf