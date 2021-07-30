import { makeStyles } from '@material-ui/core';
import React from 'react';

const MediumHighlight = ({ title, image, onClicked, rootStyle }) => {
	const jssProps = {
		rootStyle: rootStyle,
	};
	const classes = useStyles(jssProps);

	return (
		<div className={classes.root} onClick={onClicked}>
			{image && <img className={classes.img} src={image.url} alt={title} />}
			<p className={classes.text}>{title}</p>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root: ({ rootStyle }) => ({
		display: 'flex',
		flexDirection: 'row',
		flexShrink: 0,
		alignItems: 'center',
		width: 256,
		height: 64,
		// marginLeft: ({ first }) => (first ? 0 : 8),
		// marginRight: ({ last }) => (last ? 0 : 8),
		// marginBottom: ({ bottomMargin }) => (bottomMargin ? 16 : 0),
		backgroundColor: theme.palette.background[3],
		borderRadius: theme.palette.border.radius[4],
		cursor: 'pointer',
		'&:hover > p': {
			color: theme.font.color[1],
			transform: 'translateX(-256px)',
			width: 224,
			//   textAlign: 'center',
		},
		'&:hover > img': {
			height: 256,
			opacity: 0.4,
			filter: 'blur(8px)',
		},
		...rootStyle,
	}),
	img: {
		flexShrink: 0,
		height: 64,
		filter: 'blur(0px)',
		transition: 'height 1s, opacity 1s, filter 1s',
	},
	text: {
		flexShrink: 0,
		display: 'block',
		width: 166,
		fontSize: theme.font.size[4],
		fontFamily: theme.font.family.subtitle,
		fontWeight: theme.font.weight[400],
		wordWrap: 'wrap',
		color: theme.font.color[4],
		padding: '8px 16px',
		transition: 'transform 1s, width 1s',
	},
}));

export default MediumHighlight;
