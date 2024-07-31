import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/profile', async () => {
    return HttpResponse.json({
      id: '1',
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      avatar: 'https://i.pravatar.cc/300',
      bio: 'Frontend Developer at TechCorp',
      phone: '+1234567890',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        country: 'USA',
      },
      website: 'https://janedoe.dev',
      social: {
        twitter: '@janedoe',
        linkedin: 'https://linkedin.com/in/janedoe',
        github: 'https://github.com/janedoe',
      },
    })
  }),
  http.post('/posts', () => {
    console.log('Captured a "POST /posts" request')
  }),
  http.delete('/posts/:id', ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`)
  }),
]
