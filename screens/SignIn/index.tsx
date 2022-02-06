import { useState } from 'react'
import { RootTabScreenProps } from '../../types'
import { TouchableWithoutFeedback } from 'react-native'
import { 
	Container,
	BackButton,
	Title,
	SubTitle,
	Text,
	EmailContainer,
	Email,
	ButtonContainer,
	Button,
	ButtonText,
	AlreadyRegisterdContainer,
	AlreadyRegisterd,
	CreateAccount
} from './styles'

const SignIn = ({ navigation }: RootTabScreenProps<'SignIn'>) => {
	const [text, onChangeText] = useState('');

	return (
		<Container>
			<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
				<BackButton
					source={require('../../assets/images/reply.png')} 
					accessibilityLabel='Later logo'
					resizeMode='cover'
					testID='later-logo'
				/>
			</TouchableWithoutFeedback>

			<Title>Vamos a iniciar sesión.</Title>
			<SubTitle>¡Te extrañamos!</SubTitle>
			<Text>Vamos a enviarte un link para que puedas acceder a tu cuenta.</Text>

			<EmailContainer>
				<Email
					onChangeText={onChangeText}
					value={text}
					placeholder="Ingresa tu e-mail"
					placeholderTextColor="#91929E"
					keyboardType="email-address"
				/>
			</EmailContainer>

			<ButtonContainer>
				<AlreadyRegisterdContainer>
					<AlreadyRegisterd>¿Todavía no tenés una cuenta?</AlreadyRegisterd>
					<TouchableWithoutFeedback onPress={() => navigation.push('SignUp')}>
						<CreateAccount>Crear</CreateAccount>
					</TouchableWithoutFeedback>
				</AlreadyRegisterdContainer>
				
				<Button 
					onPress={() => navigation.push('SignIn')}
					activeOpacity={0.6}
					underlayColor="#DDDDDD"
					background="#FFFFFF"
				>
					<ButtonText color="#313135">Iniciar sesión</ButtonText>
				</Button>
			</ButtonContainer>
		</Container>
	)
}

export default SignIn