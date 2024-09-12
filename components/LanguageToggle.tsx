import React from 'react';
import { Button } from '@/components/ui/button';
import { IconLanguage } from '@tabler/icons-react';

const LanguageToggle = () => {
    return (
        <Button className="relative" variant="outline" size="icon">
            <IconLanguage className="text-black dark:text-white h-5 w-5" />
        </Button>
    );
};

export default LanguageToggle;
