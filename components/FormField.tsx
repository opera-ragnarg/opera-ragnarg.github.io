import React from 'react';
import { Label } from './ui/label';
import { InfoIcon } from './icons/PrefabIcons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  description?: string;
}

export function FormField({ label, children, className = "", description }: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <div className="h-[50px] flex items-center px-2 py-0.5 rounded">
        <div className="flex-1 flex items-center gap-1">
          <Label className="text-[#bdb8d1] text-[11px] leading-[14px] font-normal">
            {label}
          </Label>
          {description && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-help">
                    <InfoIcon className="text-[#bdb8d1] opacity-60 hover:opacity-100" />
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  className="bg-[#2d283e] border-[#484063] text-[#e2e0eb] text-xs max-w-[250px]"
                  side="top"
                >
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

interface DropdownFieldProps {
  label: string;
  value: string;
  onValueChange?: (value: string) => void;
  options?: string[];
  className?: string;
  description?: string;
}

export function DropdownField({ label, value, onValueChange, options, className = "", description }: DropdownFieldProps) {
  return (
    <FormField label={label} className={className} description={description}>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger 
          size="sm"
          className="bg-[#09080c] border-0 rounded h-8 text-[#bdb8d1] text-[12px] leading-[20px] font-normal hover:bg-[#0f0e14] focus:ring-0 focus:ring-offset-0 [&_svg]:text-[#bdb8d1]"
        >
          <SelectValue placeholder="Select option..." />
        </SelectTrigger>
        <SelectContent className="bg-[#2d283e] border-[#484063] text-[#e2e0eb] min-w-0">
          {options?.map((option) => (
            <SelectItem 
              key={option} 
              value={option}
              className="text-[#e2e0eb] focus:bg-[#484063] focus:text-[#e2e0eb] cursor-pointer"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
}

interface ToggleFieldProps {
  label: string;
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  description?: string;
}

export function ToggleField({ label, checked, onCheckedChange, className = "", description }: ToggleFieldProps) {
  return (
    <FormField label={label} className={className} description={description}>
      <div className="px-2 py-2.5">
        <div className="relative">
          <div 
            className={`w-[34px] h-[19px] rounded border border-[#5a517b] p-[2px] cursor-pointer ${
              checked ? 'bg-[rgba(18,16,25,0.8)]' : 'bg-[rgba(18,16,25,0.8)]'
            }`}
            onClick={() => onCheckedChange?.(!checked)}
          >
            <div 
              className={`w-[15px] h-[15px] rounded-sm transition-transform ${
                checked ? 'bg-[#8a80ac] translate-x-[13px]' : 'bg-[#8a80ac]'
              }`}
            />
          </div>
        </div>
      </div>
    </FormField>
  );
}