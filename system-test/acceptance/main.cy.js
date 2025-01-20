const SCRIPT_URL = `/api/scripts`
const OPENAI_URL = 'http://localhost:8000/ai/chat/completions';

describe('External stub', () => {
    it('Check OpenAI functionality', () => {
        cy.request("post", "http://localhost:3000/api/scripts/ai", { message: 'test_message' }).then(res => {
            expect(res.status).to.equal(201)
        })
    })

})