import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

export const TranslationDecorator = (children: any) => {
	return (
		<Suspense>
			<I18nextProvider i18n={i18n}>{children}</I18nextProvider>
		</Suspense>
	);
};
