export enum ImageShapeEnum {
    shape1 = 'shape1',
    shape2 = 'shape2',
    shape3 = 'shape3'
}

type ImageShapeProps = {
    imageUrl: string;
    shape: keyof typeof ImageShapeEnum;
}

const shape1BgPath = 'M234.6 122.14c3.46 65.4-25.6 98.01-91.04 101.36-65.43 3.34-126.6 1.25-130.07-64.16C10.02 93.94 77.99 3.48 143.42.14c65.43-3.35 87.7 56.6 91.17 122Z'
const shape2BgPath = 'M54.06 41.36C100.7-5.85 143.96-6.13 189 41.01s83.23 94.78 36.59 142c-46.64 47.2-158.43 57.55-203.46 10.41S7.42 88.58 54.06 41.36Z'
const shape3BgPath = 'M221.46 173.2c-32.2 58.51-74.93 71.15-133.42 38.93C29.56 179.9-22.32 145.25 9.88 86.73c32.2-58.52 139.77-100.4 198.26-68.18 58.49 32.23 45.52 96.12 13.32 154.64Z';

const bgPaths = {
    shape1: shape1BgPath,
    shape2: shape2BgPath,
    shape3: shape3BgPath,
}

const shape1ClipPath = 'M218.66 171.59c-29.78 58.34-71.27 72-129.57 42.1C30.8 183.8-21.1 151.34 8.67 93 38.44 34.67 142.58-9.56 200.88 20.33c58.3 29.89 47.55 92.93 17.78 151.27Z';
const shape2ClipPath = 'M234.6 122.14c3.46 65.4-25.6 98.01-91.04 101.36-65.43 3.34-126.6 1.25-130.07-64.16C10.02 93.94 77.99 3.48 143.42.14c65.43-3.35 87.7 56.6 91.17 122Z';
const shape3ClipPath = 'M228.22 144.1c-14.38 63.9-51.18 87.41-115.07 72.92-63.9-14.5-122.23-33.07-107.85-96.97C19.67 56.15 109.58-12.54 173.47 1.95c63.9 14.5 69.12 78.24 54.75 142.14Z';

const clipPaths = {
    shape1: shape1ClipPath,
    shape2: shape2ClipPath,
    shape3: shape3ClipPath,
}

const bgColorMap = {
    shape1: '#ffcc00',
    shape2: '#006600',
    shape3: '#ff0000',
}


export default function ImageShape({
    imageUrl,
    shape,
}: ImageShapeProps) {
    return (
        <svg
            width="250"
            height="250"
            viewBox="0 0 250 230"
        >
            <clipPath id={`${shape}-image-clip`}>
                <path
                    d={clipPaths[shape]}
                />
            </clipPath>
            <path
                fill={bgColorMap[shape]}
                fillRule="nonzero"
                d={bgPaths[shape]}
            />
            <path
                fill="D8D8D8"
                d={clipPaths[shape]}
            />
            <image
                href={imageUrl}
                width="250"
                height="250"
                clipPath={`url(#${shape}-image-clip)`}
            />
        </svg>
    )
}