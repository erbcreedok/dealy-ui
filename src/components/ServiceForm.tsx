import { Box, Button, FormLabel, Portal, Slide, TextField } from '@mui/material'
import { FC, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow-left.svg'
import { useStore } from 'src/store'
import { ServiceFormModel } from 'src/types'

import { useModal } from '../contexts/ModalContext'

import { Container } from './Container'
import { Flex } from './Flex'
import { ProgressBar } from './ProgressBar'
import { IconButton } from './styled/IconButton'
import { Typography } from './styled/Typography'

const defaultInitialValues: ServiceFormModel = {
	title: '',
	duration: '',
	description: '',
}

type Props = {
	defaultValues?: ServiceFormModel
}
export const ServiceForm: FC<Props> = ({
	defaultValues = defaultInitialValues,
}) => {
	const { register, handleSubmit } = useForm<ServiceFormModel>({
		defaultValues,
	})
	const [step, setStep] = useState(0)
	const { serviceStore } = useStore()
	const { titleElement } = useModal()

	const onSubmit = useCallback(
		async (values: ServiceFormModel) => {
			serviceStore.createService(values)
		},
		[serviceStore]
	)

	const steps = [
		<>
			<FormLabel sx={{ mb: 2 }}>Укажите название услуги</FormLabel>
			<TextField fullWidth placeholder="Тренинг" {...register('title')} />
		</>,
		<>
			<FormLabel sx={{ mb: 2 }}>Укажите описание для услуги</FormLabel>
			<TextField
				helperText="Описание будете видеть только вы"
				fullWidth
				multiline
				placeholder="Тренинг по будням"
				{...register('description')}
			/>
		</>,
		<>
			<FormLabel sx={{ mb: 2 }}>
				Укажите минимальную и максимальную стоимости услуги
			</FormLabel>
			<Flex sx={{ gap: '16px' }}>
				<TextField fullWidth label="минимальная" {...register('min_price')} />
				<TextField fullWidth label="максимальная" {...register('max_price')} />
			</Flex>
		</>,
		<>
			<FormLabel sx={{ mb: 2 }}>Длительность записи</FormLabel>
			<TextField {...register('duration')} />
		</>,
	]

	return (
		<>
			<Portal container={titleElement}>
				<Flex alignItems="center" gap="16px">
					<Box width="32px">
						{step > 0 && (
							<IconButton onClick={() => setStep((s) => s - 1)}>
								<ArrowLeftIcon />
							</IconButton>
						)}
					</Box>
					<Box flexGrow={1}>
						<ProgressBar
							variant="determinate"
							value={((step + 1) / steps.length) * 100}
						/>
					</Box>
				</Flex>
			</Portal>
			<Container
				component="form"
				height="100%"
				display="flex"
				flexDirection="column"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Typography fontSize="22px" fontWeight="800" mb="32px">
					Создать услугу
				</Typography>
				<Slide>{steps[step]}</Slide>
				<Box flexGrow={1} />
				<Box my={5}>
					{step < steps.length - 1 && (
						<Button
							variant="contained"
							size="large"
							fullWidth
							onClick={() => setStep((s) => s + 1)}
						>
							Продолжить
						</Button>
					)}
					{step === steps.length - 1 && (
						<Button variant="contained" size="large" fullWidth type="submit">
							Создать расписание
						</Button>
					)}
				</Box>
			</Container>
		</>
	)
}
