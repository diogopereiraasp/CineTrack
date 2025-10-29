export const fontSizes = {
    display: 32,
    title: 24,
    subtitle: 18,
    body: 16,
    label: 14,
    caption: 12,
    small: 10,
};

export const fontWeights = {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
};

export type FontSizes = typeof fontSizes;
export type FontSizeToken = keyof FontSizes;

export type FontWeights = typeof fontWeights;
export type FontWeightToken = keyof FontWeights;