type TestStateType = {
  test: Array<any>
}

const initialState = {
  test: [],
}

export const testReducer = (state: TestStateType = initialState, action: ActionsType): TestStateType => {
  switch (action.type) {
    case 'TEST': {
      return state
    }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof testAC>

const testAC = () => {
  return { type: 'TEST' } as const
}
