import { Play } from "phosphor-react";

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  PlayButton,
  Separator,
  TaskInput,
} from "./styles.ts";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Teste" />
            <option value="Teste" />
            <option value="Teste" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <PlayButton type="submit">
          <Play size={24} />
          Começar
        </PlayButton>
      </form>
    </HomeContainer>
  );
}
