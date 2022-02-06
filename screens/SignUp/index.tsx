import { useState, createRef} from 'react'
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native'
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

const SignUp = ({ navigation }: RootTabScreenProps<'SignUp'>) => {
	const [name, onChangeName] = useState('');
	const [email, onChangeEmail] = useState('');
	const inputRef = createRef<TextInput>();

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled={false} style={{flex: 1}}>
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
					</InputContainer>

					<InputContainer>
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
						onPress={() => navigation.push('SignUp')}
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						background="#FFFFFF"
					>
						<ButtonText color="#313135">Iniciar sesión</ButtonText>
					</Button>
				</ButtonContainer>
			</Container>
		</KeyboardAvoidingView>
	)
}

export default SignUp