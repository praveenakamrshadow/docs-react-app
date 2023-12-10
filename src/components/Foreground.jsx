import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: 'Resume for jobs apply',
            filesize: '5mb',
            close: false,
            tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' },
        },
        {
            desc: 'Full Stack web development resourses',
            filesize: '45mb',
            close: false,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
        },
        {
            desc: 'family photos',
            filesize: '99mb',
            close: true,
            tag: { isOpen: true, tagTitle: 'Upload', tagColor: 'blue' },
        },
    ];
    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
        >
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Foreground;
