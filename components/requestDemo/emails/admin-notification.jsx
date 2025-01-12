import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
  } from '@react-email/components'
  
  export default function AdminNotificationEmail({
    firstName,
    email,
    phone,
    budget,
    preferredTime,
  }) {
    return (
      <Html>
        <Head />
        <Preview>New Demo Request from {firstName}</Preview>
        <Body style={{ background: '#1C1C1C', color: '#fff' }}>
          <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Heading style={{ color: '#9FE12C', fontSize: '24px', marginBottom: '20px' }}>
              New Demo Request Received
            </Heading>
            <Section style={{ background: '#2A3B14', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
              <Heading as="h2" style={{ color: '#fff', fontSize: '20px', marginBottom: '15px' }}>
                Contact Details
              </Heading>
              <Text style={{ color: '#ccc', margin: '10px 0' }}>
                <strong>Name:</strong> {firstName}
              </Text>
              <Text style={{ color: '#ccc', margin: '10px 0' }}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={{ color: '#ccc', margin: '10px 0' }}>
                <strong>Phone:</strong> {phone}
              </Text>
              <Text style={{ color: '#ccc', margin: '10px 0' }}>
                <strong>Budget:</strong> ${budget.toLocaleString()}
              </Text>
              <Text style={{ color: '#ccc', margin: '10px 0' }}>
                <strong>Preferred Time:</strong> {preferredTime}
              </Text>
            </Section>
            <Text style={{ fontSize: '14px', color: '#666' }}>
              This is an automated notification from your website.
            </Text>
          </Container>
        </Body>
      </Html>
    )
  }  