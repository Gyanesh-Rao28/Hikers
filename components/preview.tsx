
import Image from "next/image";
import { FaFile, FaFilePdf, FaFileWord, FaLink } from "react-icons/fa";

interface PreviewProps{
    fileName: string
}

const Preview = ({ fileName }:PreviewProps) => {

    const getFileExtension = (filename: string): string => {
        const parts = filename.split('.')
        return parts.length > 1 ? parts.pop()?.toLowerCase() ?? '' : ''
    }

    const renderLicenseFile = () => {
        if (!fileName) return null

        const fileExtension = getFileExtension(fileName)

        switch (fileExtension) {
            case 'pdf':
                return (
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl">
                        <a href={fileName} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                            <FaFilePdf className="w-12 h-12 text-red-500" />
                            <span className="mt-2 text-sm">View</span>
                        </a>
                    </div>
                )
            case 'docx':
                return (
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl">
                        <a href={fileName} download className="flex flex-col items-center">
                            <FaFileWord className="w-3 h-3 text-blue-500" />
                            <span className="mt-2 text-sm">Download</span>
                        </a>
                    </div>
                )
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return (
                    <Image
                        src={fileName}
                        priority
                        width={256}
                        height={128}
                        alt="Agency License"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
                    />
                )
            default:
                return (
                    <div className="flex items-center justify-center w-16 h-14 bg-gray-100 rounded-xl">
                        <a href={fileName} download className="flex flex-col items-center">
                            <FaFile className="w-3 h-3 text-gray-500" />
                            <span className="mt-2 text-xs">Download</span>
                        </a>
                    </div>
                )
        }
    }

    return (
        <>
            <div className='mx-2'>
                {renderLicenseFile()}
            </div>
        </>
    )
}

export default Preview