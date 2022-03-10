/**
 * IMPORTS
 */
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { MotionDiv } from 'styles/motiondiv';
import { Field } from 'components/form/field';
import { Input } from 'components/form/input';
import { Title } from "components/title";
import { Button } from 'components/button';
import user from "features/user";
import { schema } from './schema';
import { $Form, $Join, $JoinContainer } from "./styles";

/**
 * I am the login page
 */
export const Login = () => {

    const { errors, handleSubmit, register } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();

    const onSubmit = (data): void => {
        dispatch(user.actions.update({
            username: data.username,
            signed: true
        }))
    };

    return (
        <MotionDiv>
            <Title
                title="Login"
            />
            <$Form onSubmit={handleSubmit(onSubmit)}>
                <Field error={errors.username?.message} label="Usuário">
                    <Input name="username" innerRef={register} />
                </Field>

                <Field error={errors.password?.message} label="Senha">
                    <Input name="password" innerRef={register} type="password" />
                </Field>
                <Button>
                    Entrar
                </Button>
            </$Form>
            <$JoinContainer>
                Ainda não tem conta? <$Join to="join">Cadastre-se</$Join>
            </$JoinContainer>
        </MotionDiv>
    )
}