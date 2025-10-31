const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

interface TipPercentageFormProps {
    setTip: (tip: number) => void
    tip?: number
}

const TipPercentageForm = ({ setTip, tip }: TipPercentageFormProps) => {
  return (
    <div>
        <h3 className='font-black text-2xl'>Tip:</h3>
        <form>
        {
            tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex items-center gap-2 mt-3">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                        id={tipOption.id}
                        type="radio"
                        name="tip-percentage"
                        value={tipOption.value}
                        onChange={e => setTip(+e.target.value)}
                        checked={tip === tipOption.value}
                    />
                </div>
            ))
        }
        </form>
    </div>
  )
}

export default TipPercentageForm
