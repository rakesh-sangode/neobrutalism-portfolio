import React from "react"

const Loader: React.FC = () => (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-secondaryBlack">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-themehead border-webred border-t-transparent"></div>
    </div>
)

export default Loader