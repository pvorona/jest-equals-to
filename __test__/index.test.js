describe('jest has bug?', () => {
    it('here?', () => {
        expect({
            "answerCode": undefined, "color": "rgb(255, 0, 0)"
        }).toEqual({
            color: 'rgb(255, 0, 0)',
        })
    })
})