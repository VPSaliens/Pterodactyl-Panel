import * as React from 'react';
import classNames from 'classnames';
import FlashMessageRender from '@/components/FlashMessageRender';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';

type Props = Readonly<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title?: string;
    borderColor?: string;
    showFlashes?: string | boolean;
    showLoadingOverlay?: boolean;
}>;

const ContentBox = ({ title, borderColor, showFlashes, showLoadingOverlay, children, ...props }: Props) => (
    <div {...props}>
        {title && <h2 className={'text-neutral-300 mb-4 px-4'}>{title}</h2>}
        {showFlashes &&
        <FlashMessageRender
            byKey={typeof showFlashes === 'string' ? showFlashes : undefined}
            className={'mb-4'}
        />
        }
        <div className={classNames('bg-neutral-700 p-4 rounded shadow-lg relative', borderColor, {
            'border-t-4': !!borderColor,
        })}>
            <SpinnerOverlay visible={showLoadingOverlay || false}/>
            {children}
        </div>
    </div>
);

export default ContentBox;
