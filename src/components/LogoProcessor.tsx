import { useState, useEffect } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalLogoUrl: string;
  onProcessedLogo: (processedUrl: string) => void;
}

const LogoProcessor = ({ originalLogoUrl, onProcessedLogo }: LogoProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      try {
        console.log('Loading original logo...');
        const imageElement = await loadImageFromUrl(originalLogoUrl);
        
        console.log('Removing background...');
        const processedBlob = await removeBackground(imageElement);
        
        console.log('Creating URL for processed image...');
        const url = URL.createObjectURL(processedBlob);
        setProcessedUrl(url);
        onProcessedLogo(url);
        
        console.log('Logo processing completed successfully!');
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original logo if processing fails
        onProcessedLogo(originalLogoUrl);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalLogoUrl, onProcessedLogo]);

  // Cleanup URL when component unmounts
  useEffect(() => {
    return () => {
      if (processedUrl) {
        URL.revokeObjectURL(processedUrl);
      }
    };
  }, [processedUrl]);

  if (isProcessing) {
    return (
      <div className="flex flex-col items-center justify-center w-80 h-80">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-muted-foreground">Processing logo...</p>
      </div>
    );
  }

  return null;
};

export default LogoProcessor;