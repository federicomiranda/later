import { useState, createRef} from 'react'
import { TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { RootTabScreenProps } from '../../types'
import { TouchableWithoutFeedback } from 'react-native'
import { 
	Container,
	Content,
	BackButton,
	Title,
	Text,
	InputContainer,
	Input,
	ButtonContainer,
	Button,
	ButtonText,
	AlreadyRegisterdContainer,
	AlreadyRegisterd,
	CreateAccount
} from './styles'
import app from '../../db'

const SignUp = ({ navigation }: RootTabScreenProps<'SignUp'>) => {
	const [name, onChangeName] = useState('');
	const [email, onChangeEmail] = useState('');
	const inputRef = createRef<TextInput>();

	const handleSignUp = () => {
		try {
			app.auth().createUserWithEmailAndPassword(email, '123456')
				.then((userCredentials: any) => {
					console.log(userCredentials)
					const user = userCredentials.user;
					console.log(user.email)
				})
				.catch((e: any) => {
					console.error('e => ', e)
				})
		} catch (e) {
			console.error('ESTE CATCH', e)
		}
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled={false} style={{ flex: 1 }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<Content>
						<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
							<BackButton
								source={require('../../assets/images/reply.png')} 
								accessibilityLabel='Later logo'
								resizeMode='cover'
								testID='later-logo'
							/>
						</TouchableWithoutFeedback>

						<Title>¡Empecemos!</Title>
						<Text>Solamente vamos a solicitarte que nos digas tu nombre y un e-mail.</Text>
						<Text>Es lo único que vas a necesitar para poder ingresar a tu cuenta más adelante.</Text>

						<InputContainer>
							<Input
								onChangeText={onChangeName}
								value={name}
								placeholder="Ingresa tu nombre"
								placeholderTextColor="#91929E"
								keyboardType="default"
								returnKeyType="next"
								onSubmitEditing={() => inputRef.current?.focus()}
							/>
							
							<Input
								ref={inputRef}
								onChangeText={onChangeEmail}
								value={email}
								placeholder="Ingresa tu e-mail"
								placeholderTextColor="#91929E"
								keyboardType="email-address"
							/>
						</InputContainer>
					</Content>

					<ButtonContainer>
						<AlreadyRegisterdContainer>
							<AlreadyRegisterd>¿Ya tenés una cuenta?</AlreadyRegisterd>
							<TouchableWithoutFeedback onPress={() => navigation.push('SignIn')}>
								<CreateAccount>Ingresar</CreateAccount>
							</TouchableWithoutFeedback>
						</AlreadyRegisterdContainer>
						
						<Button 
							onPress={handleSignUp}
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							background="#FFFFFF"
						>
							<ButtonText color="#313135">Crear cuenta</ButtonText>
						</Button>
					</ButtonContainer>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default SignUp