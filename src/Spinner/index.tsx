import React from 'react';

interface MyComponentProps {
    text: string;
    color?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text, color }) => (
    <div>Bilal {text} {color}</div>
);

export { MyComponentProps, MyComponent };