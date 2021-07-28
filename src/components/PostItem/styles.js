import { mergeStyleSets, getTheme, getFocusStyle } from '@fluentui/react/lib/Styling';

const theme = getTheme();
const { palette, semanticColors, fonts } = theme;

const classNames = mergeStyleSets({
    itemCell: [
        getFocusStyle(theme, { inset: -1 }),
        {
            background: 'rgb(48, 64, 64)',
            color: 'white',
            minHeight: 54,
            margin: '5px 0',
            padding: 10,
            boxSizing: 'border-box',
            // borderBottom: `1px solid ${semanticColors.bodyDivider}`,
            borderRadius: 15,
            cursor: 'pointer',
            display: 'flex',
            selectors: {
                '&:hover': { background: 'rgb(48, 64, 64, 0.75)' },
            },
        },
    ],
    // itemImage: {
    //     flexShrink: 0,
    // },
    itemContent: {
        marginLeft: 10,
        overflow: 'hidden',
        flexGrow: 1,
    },
    itemName: [
        fonts.xLarge,
        {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    ],
    itemIndex: {
        fontSize: fonts.small.fontSize,
        color: palette.neutralTertiary,
        marginBottom: 10,
    },
    itemButton: {
        color: 'red',
        selectors: {
            '&:hover': {
                background: 'rgb(48, 64, 64, 0.75)',
                color: 'red'
            },
        },
    }
});

export default classNames;