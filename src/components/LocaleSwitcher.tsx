import {useLocale} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: 'English'
        },
        {
          value: 'tr',
          label: 'Türkçe'
        },
        {
          value: 'ar',
          label: 'العربية'
        }
      ]}
      label="Select language"
    />
  );
}
