import styled from 'styled-components/native'
import { TouchableWithoutFeedback } from 'react-native';

interface ButtonProps {
	background: string;
}

interface ButtonTextProps {
	color: string;
}

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: space-between;
`

export const Content = styled.View`
	width: 100%;
	align-items: center;
	flex: 1;
	padding-top: 100px;
	position: relative;
`

export const BackButton = styled.Image`
	width: 40px;
	height: 40px
	resize-mode: contain;
	position: absolute;
	left: 10px;
	top: 60px;
`;

export const Title = styled.Text`
	margin-top: 50px;
	color: #FFFFFF;
	font-size: 28px;
	line-height: 42px;
	padding: 0 20px;
	width: 100%;
`;

export const Text = styled.Text`
	color: #90929E;
	font-size: 16px;
	line-height: 24px;
	width: 100%;
	padding: 0 20px;
`;

export const InputContainer = styled.View`
	width: 100%;
	padding: 0 20px;
	margin-top: 45px;
`

export const Input = styled.TextInput`
	background: #232227;
	color: #91929E;
	padding: 20px;
	width: 100%;
	border-radius: 24px;
	font-size: 16px;
	margin-bottom: 20px;
`

export const ButtonContainer = styled.View`
	width: 100%;
	padding: 0 20px 40px 20px;
`

export const AlreadyRegisterdContainer = styled.View`
	flex-direction: row;
	justify-content: center;
`

export const AlreadyRegisterd = styled.Text`
	color: #90929E;
	font-size: 16px;
	line-height: 24px;
	padding-right: 10px;
	text-align: center;
	margin-bottom: 24px;
`;

export const CreateAccount = styled.Text`
	color: #FFFFFF;
	font-size: 16px;
	line-height: 24px;
`

export const Button = styled.TouchableHighlight<ButtonProps>`
	background: ${props => props.background};
	width: 100%;
	padding: 16px 12px;
	border-radius: 24px;
`

export const ButtonText = styled.Text<ButtonTextProps>`
	color: ${props => props.color};
	font-size: 16px;
	line-height: 24px;
	text-align: center;
`