/**
 * IMPORTS
 */
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MotionDiv } from 'styles/motiondiv';
import { Button } from 'components/button';
import { Field } from 'components/form/field';
import { Input } from 'components/form/input';
import { Select } from 'components/form/select';
import { Row } from 'components/form/row';
import { Title } from "components/title";
import user from 'features/user';
import http from 'infra/http';
import { notify } from 'infra/notify';
import { selectIsLoading } from 'features/notify/selectors';
import { schema } from './schema';
import { $Form } from "./styles";

/**
 * I am the join page
 */
export const Join = () => {

    const { errors, handleSubmit, register, control } = useForm({
        resolver: yupResolver(schema)
    });


    const dispatch = useDispatch();

    const history = useHistory();

    const isLoading = useSelector(selectIsLoading);

    const [states, setStates] = useState([]);

    const onSubmit = async (data) => {
        try {
            const body = {
                tipo: 1,
                name: data.name,
                email: data.email,
                password: data.password,
                bi: data.bi,
                nif: data.nif,
                provincia: data.state,
                cidade: data.city,
                endereco: data.address,
                telefone: data.phone
            }

            const response = await http.post('users/create', { body, dispatch });

            if (response?.status !== 200)
                throw Error

            notify({
                title: "Bem-vindo à AngoCursos!",
                message: "Seu cadastrado foi realizado com sucesso",
                type: "success"
            });

            await dispatch(user.actions.update({
                username: data.email,
                signed: true
            }));
            history.push('/');
        }
        catch (error) {
            notify({
                title: "Não foi possível realizar o cadastro",
                message: import.meta.env.VITE_GENERIC_ERROR,
                type: "danger"
            });
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await http.get('provincias', { dispatch });

                if (response?.status !== 200)
                    throw Error

                const states = response.data.map(item => ({
                    value: item.provincia.id,
                    name: item.provincia.provincia
                }));
                setStates(states);
            }
            catch (error) {
                notify({
                    title: "Não foi possível resgatar as pronvíncias",
                    message: import.meta.env.VITE_GENERIC_ERROR,
                    type: "danger"
                });
            }
        })()
    }, [])

    return (
        <MotionDiv>
            <Title
                title="Crie uma conta"
            />
            <$Form onSubmit={handleSubmit(onSubmit)}>
                <Field error={errors.name?.message} label="Nome Completo">
                    <Input name="name" innerRef={register} />
                </Field>
                <Field error={errors.email?.message} label="Email">
                    <Input name="email" innerRef={register} />
                </Field>
                <Row>
                    <Field error={errors.password?.message} label="Senha">
                        <Input name="password" innerRef={register} type="password" />
                    </Field>
                    <Field error={errors.confirmPassword?.message} label="Confirme a Senha">
                        <Input name="confirmPassword" innerRef={register} type="password" />
                    </Field>
                </Row>
                <Row>
                    <Field error={errors.bi?.message} label="BI">
                        <Input name="bi" innerRef={register} />
                    </Field>
                    <Field error={errors.nif?.message} label="NIF">
                        <Input name="nif" innerRef={register} />
                    </Field>
                </Row>
                <Row>
                    <Field error={errors.phone?.message} label="Telefone">
                        <Input
                            control={control}
                            mask="999 999 999"
                            formatChars={{ 9: '[0-9]' }}
                            maskChar={null}
                            name="phone"
                        />
                    </Field>
                    <Field error={errors.state?.message} label="Província">
                        <Select
                            name="state"
                            innerRef={register}
                            options={states}
                        />
                    </Field>
                </Row>
                <Row>
                    <Field error={errors.city?.message} label="Cidade">
                        <Input name="city" innerRef={register} />
                    </Field>
                    <Field error={errors.address?.message} label="Endereço">
                        <Input name="address" innerRef={register} />
                    </Field>
                </Row>
                <Button disabled={isLoading}>
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </Button>
            </$Form>
        </MotionDiv>
    )
}