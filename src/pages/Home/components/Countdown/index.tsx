import { useEffect, useState } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'

export function Countdown() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setCycles((cycle) =>
            cycle.map((item) => {
              if (item.id === activeCycleId) {
                return { ...item, finishedDate: new Date() }
              } else {
                return item
              }
            }),
          )

          setAmountSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])
  return (
    <CountdownContainer>
      <span>{minute[0]}</span>
      <span>{minute[1]}</span>
      <Separator>:</Separator>
      <span>{second[0]}</span>
      <span>{second[1]}</span>
    </CountdownContainer>
  )
}
