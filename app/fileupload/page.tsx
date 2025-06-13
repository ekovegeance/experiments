import React from 'react';
import ImageUploader from "@/components/fileupload/image-uploader";
import MultipleFileUploader from "@/components/fileupload/multiple-file-uploader";


export default function Page() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div>
            <ImageUploader/>
            <MultipleFileUploader/>
            </div>
        </div>
    );
}