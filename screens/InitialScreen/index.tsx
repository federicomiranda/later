import { RootTabScreenProps } from '../../types'
import { 
	Container,
	Logo,
	Illus,
	Text,
	ButtonsContainer,
	Button,
	ButtonText
} from './styles'

const InitialScreen = ({ navigation }: RootTabScreenProps<'InitialScreen'>) => {
	return (
		<Container>
			<Logo 
				source={require('../../assets/images/logo.png')} 
				accessibilityLabel='Later logo'
				resizeMode='cover'
				testID='later-logo'
			/>
			<Illus 
				source={require('../../assets/images/illus.png')} 
				accessibilityLabel="Illustración de un reloj de arena con una persona sentada arriba con su computadora" 
				resizeMode='cover'
				testID='later-illustration'
			/>
			<Text>Almacená todo eso que te gustaría leer pero no podes en ese momento.</Text>
			<Text>Etiqueta el contenido para poder accederlo fácilmente en el futuro y activá recordatorios.</Text>

			<ButtonsContainer>
				<Button
					onPress={() => navigation.push('SignUp')}
					activeOpacity={0.6}
					underlayColor="#444444"
					background="#313135"
				>
					<ButtonText color="#FFFFFF">Crear cuenta</ButtonText>
				</Button>

				<Button 
					onPress={() => navigation.push('SignIn')}
					activeOpacity={0.6}
					underlayColor="#DDDDDD"
					background="#FFFFFF"
				>
					<ButtonText color="#313135">Iniciar sesión</ButtonText>
				</Button>
			</ButtonsContainer>
		</Container>
	)
}

export default InitialScreen