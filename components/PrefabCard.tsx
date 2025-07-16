import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Trash2, Plus, Copy } from 'lucide-react';

interface PrefabProperty {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'switch' | 'textarea';
  options?: string[];
  placeholder?: string;
  defaultValue?: any;
}

interface PrefabCardProps {
  title: string;
  properties: PrefabProperty[];
  maxVariants?: number;
  onVariantChange?: (variants: any[]) => void;
}

export function PrefabCard({ title, properties, maxVariants = 5, onVariantChange }: PrefabCardProps) {
  const [variants, setVariants] = useState([createEmptyVariant()]);

  function createEmptyVariant() {
    const variant: any = { id: Date.now() + Math.random() };
    properties.forEach(prop => {
      variant[prop.id] = prop.defaultValue || '';
    });
    return variant;
  }

  function addVariant() {
    if (variants.length < maxVariants) {
      const newVariants = [...variants, createEmptyVariant()];
      setVariants(newVariants);
      onVariantChange?.(newVariants);
    }
  }

  function removeVariant(index: number) {
    if (variants.length > 1) {
      const newVariants = variants.filter((_, i) => i !== index);
      setVariants(newVariants);
      onVariantChange?.(newVariants);
    }
  }

  function duplicateVariant(index: number) {
    if (variants.length < maxVariants) {
      const variantToCopy = { ...variants[index], id: Date.now() + Math.random() };
      const newVariants = [...variants];
      newVariants.splice(index + 1, 0, variantToCopy);
      setVariants(newVariants);
      onVariantChange?.(newVariants);
    }
  }

  function updateVariant(index: number, propertyId: string, value: any) {
    const newVariants = [...variants];
    newVariants[index][propertyId] = value;
    setVariants(newVariants);
    onVariantChange?.(newVariants);
  }

  function renderProperty(property: PrefabProperty, variant: any, variantIndex: number) {
    const value = variant[property.id];
    
    switch (property.type) {
      case 'text':
        return (
          <Input
            placeholder={property.placeholder}
            value={value}
            onChange={(e) => updateVariant(variantIndex, property.id, e.target.value)}
          />
        );
      
      case 'number':
        return (
          <Input
            type="number"
            placeholder={property.placeholder}
            value={value}
            onChange={(e) => updateVariant(variantIndex, property.id, Number(e.target.value))}
          />
        );
      
      case 'select':
        return (
          <Select value={value} onValueChange={(val) => updateVariant(variantIndex, property.id, val)}>
            <SelectTrigger>
              <SelectValue placeholder={property.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {property.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case 'switch':
        return (
          <Switch
            checked={value}
            onCheckedChange={(checked) => updateVariant(variantIndex, property.id, checked)}
          />
        );
      
      case 'textarea':
        return (
          <textarea
            className="min-h-[80px] w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={property.placeholder}
            value={value}
            onChange={(e) => updateVariant(variantIndex, property.id, e.target.value)}
          />
        );
      
      default:
        return null;
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl uppercase">{title}</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {variants.length}/{maxVariants} variants
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={addVariant}
              disabled={variants.length >= maxVariants}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {variants.map((variant, index) => (
          <div key={variant.id} className="space-y-4 p-4 border rounded-lg bg-muted/30">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Variant {index + 1}</h4>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => duplicateVariant(index)}
                  disabled={variants.length >= maxVariants}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeVariant(index)}
                  disabled={variants.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {properties.map((property) => (
                <div key={property.id} className="space-y-2">
                  <Label htmlFor={`${variant.id}-${property.id}`}>
                    {property.label}
                  </Label>
                  {renderProperty(property, variant, index)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}