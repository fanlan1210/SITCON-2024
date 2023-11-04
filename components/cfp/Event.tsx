export type EventTime = [number, string, number | string]

export type EventType = 'general' | 'undefined' | 'poster' | 'SITCON'

export type EventProp = {
	time: EventTime
	// [2023, 'Nov.', 19]
	// [2023, 'Nov.', 下旬]

	endTime?: EventTime

	type: EventType[]

	selectedType?: EventType | ''

	name: string

	desc?: string
}

export default function Event({
	time,
	endTime,
	type,
	selectedType,
	name,
	desc,
}: EventProp) {
	function Time({ time }: { time: EventTime }) {
		return (
			<div className="flex h-min px-2 first:pt-2 last:pb-2">
				<div className="flex flex-col items-center">
					<div className="text-gold">{time[0]}</div>
					<div className="text-gold text-2xl">{time[1]}</div>
				</div>

				<div
					className={`text-gold flex flex-col justify-end items-center ${
						typeof time[2] === 'string' ? 'text-2xl' : 'text-5xl'
					}`}
				>
					<div>{zero(time[2])}</div>
				</div>
			</div>
		)
	}

	const typeColor = {
		general: 'bg-purple',
		undefined: 'bg-pink',
		poster: 'bg-green',
		SITCON: 'bg-blue',
	}

	function zero(n: number | string) {
		if (typeof n === 'string') return n

		if (n < 10) return `0${n}`
		return `${n}`
	}

	const isGray =
		selectedType === undefined ||
		type.includes('SITCON') ||
		selectedType === '' ||
		type.includes(selectedType)

	return (
		<div
			className={`min-h-[110px] max-w-[512px] flex border border-1-6 rounded shadow-[0px_4px_8px_0px_#0000001A] my-6 ${
				isGray ? '' : 'grayscale'
			}`}
		>
			<div className="flex flex-col">
				{type.map(type => (
					<div
						key={type}
						className={`${typeColor[type]} w-[5px] flex-grow first:rounded-tl-[3.5px] last:rounded-bl-[3.5px]`}
					/>
				))}
			</div>

			<div>
				<Time time={time} />

				{endTime ? (
					<>
						<div className="border border-white border-r-gold w-[94px] h-[37px]" />
						<Time time={endTime} />
					</>
				) : null}
			</div>

			{/* todo: align */}
			<div className="text-4-6 my-2 mx-4 flex flex-col">
				<span className="text-[32px] font-bold">{name}</span>
				<span>{desc}</span>
			</div>
		</div>
	)
}
