'use client';

import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';

import { cn } from '@/shared/lib/utils/cn';
import { PaperclipIcon } from '@/shared/ui/icons/paperclip';
import { Text } from '@/shared/ui/kit/text';

export const Dropdzone = ({
  required,
  name,
  onDrop,
  value,
  placeholder,
  label,
  hint,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (file: File | null) => void;
  value?: File | null;
  placeholder?: string;
  label?: string;
  hint?: string;
}) => {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    multiple: false,
    onDrop: incomingFiles => {
      if (onDrop) {
        onDrop(incomingFiles[0] || null);
      }
    },
  });

  const file = value ?? acceptedFiles[0];

  return (
    <div className="relative flex flex-col gap-1">
      <Text size="xs" color={!hint ? 'muted' : 'danger'}>
        {label}
      </Text>
      <div
        className={cn(
          'flex cursor-pointer flex-col items-center rounded-md border p-4',
          hint ? 'border-danger' : 'border-[#A4A189]',
        )}
      >
        <div
          {...getRootProps({ className: 'dropzone' })}
          className="flex w-full flex-col gap-1"
        >
          <input
            type="file"
            name={name}
            required={required}
            style={{ opacity: 0 }}
            ref={hiddenInputRef}
            {...getInputProps()}
          />
          <button
            className="flex w-full items-center justify-between text-left"
            type="button"
            onClick={e => {
              e.stopPropagation();
              open();
            }}
          >
            <Text color="grey">{file ? file.name : placeholder}</Text>
            <PaperclipIcon />
          </button>
        </div>
      </div>
      {hint && (
        <span className="absolute -bottom-4 left-0">
          <Text size="xs" color="danger">
            {hint}*
          </Text>
        </span>
      )}
    </div>
  );
};
