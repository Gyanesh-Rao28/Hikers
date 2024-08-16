'use client'

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaFilePdf, FaFileWord, FaFileImage } from "react-icons/fa";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface FileUploadProps {
    onFileUpload: (fileUrl: string, fileName: string) => void;
    label: string;
    id: string;
    accept?: string;
    path?: string
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, label, id, accept = ".jpg,.jpeg,.png,.pdf,.docx", path }) => {
    const [uploading, setUploading] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<{ url: string; name: string } | null>(null);

    const storage = getStorage();

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
            alert('Please upload an image (JPG or PNG), PDF, or DOCX file.');
            return;
        }

        setUploading(true);

        try {
            const storageRef = ref(storage, `${path}/${file.name}_${Date.now()}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            setUploadedFile({ url: downloadURL, name: file.name });
            onFileUpload(downloadURL, file.name);
        } catch (error) {
            console.error("Error uploading file: ", error);
            alert('Failed to upload file. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const getFileIcon = (fileName: string) => {
        const extension = fileName.split('.').pop()?.toLowerCase();
        switch (extension) {
            case 'pdf':
                return <FaFilePdf />;
            case 'docx':
                return <FaFileWord />;
            case 'jpg':
            case 'jpeg':
            case 'png':
                return <FaFileImage />;
            default:
                return null;
        }
    };

    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type="file"
                accept={accept}
                onChange={handleFileUpload}
                disabled={uploading}
            />
            {uploading && <p>Uploading...</p>}
            {uploadedFile && (
                <div className="flex items-center gap-2">
                    {getFileIcon(uploadedFile.name)}
                    <a href={uploadedFile.url} target="_blank" rel="noopener noreferrer">
                        {uploadedFile.name}
                    </a>
                </div>
            )}
        </div>
    );
};

export default FileUpload;