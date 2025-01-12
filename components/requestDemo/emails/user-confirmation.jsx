import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

export default function UserConfirmationEmail({ firstName, preferredTime }) {
  return (
    <Html>
      <Head />
      <Preview>Your Demo Request is Confirmed</Preview>
      <Body style={{ background: '#1C1C1C', color: '#fff' }}>
        <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <Heading
            style={{ color: '#9FE12C', fontSize: '24px', marginBottom: '20px' }}
          >
            Demo Request Confirmed
          </Heading>
          <Section
            style={{
              background: '#2A3B14',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          >
            <Text
              style={{ color: '#fff', fontSize: '18px', marginBottom: '15px' }}
            >
              Hi {firstName},
            </Text>
            <Text
              style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '15px' }}
            >
              Thank you for requesting a demo. We're excited to show you how our
              platform can help transform your business.
            </Text>
            <Text
              style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '15px' }}
            >
              Your demo is scheduled for:{' '}
              <strong style={{ color: '#9FE12C' }}>{preferredTime}</strong>
            </Text>
            <Text style={{ color: '#ccc', lineHeight: '1.6' }}>
              We'll be reaching out shortly to confirm the details and provide
              you with the meeting link.
            </Text>
          </Section>
          <Text
            style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}
          >
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
