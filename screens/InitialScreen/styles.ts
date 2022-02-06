import styled from 'styled-components/native'

interface ButtonProps {
	background: string;
}

interface ButtonTextProps {
	color: string;
}

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	padding-top: 100px;
	position: relative;
`

export const Logo = styled.Image`
	width: 100px;
	margin-bottom: 45px;
	resize-mode: contain;
`;

export const Illus = styled.Image`
	width: 100%;
	resize-mode: contain;
	margin-bottom: 45px;
`;

export const Text = styled.Text`
	color: #90929E;
	font-size: 16px;
	line-height: 24px;
	width: 100%;
	padding: 0 20px;
`;

export const Separator = styled.View`
	margin: 30px 0;
	height: 1px;
	width: 80%;
`

export const ButtonsContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 0 20px;
	position: absolute;
	bottom: 40px;
`

export const Button = styled.TouchableHighlight<ButtonProps>`
	background: ${props => props.background};
	width: 48%;
	padding: 16px 12px;
	border-radius: 24px;
`

export const ButtonText = styled.Text<ButtonTextProps>`
	color: ${props => props.color};
	font-size: 16px;
	line-height: 24px;
	text-align: center;
`