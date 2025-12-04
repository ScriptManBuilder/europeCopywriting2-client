import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../config/constants';
import { usePrice } from '../hooks/usePrice';

const PolicyWrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 80px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8faff 0%, #f1f5f9 100%);

  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
`;

const PolicyHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--minimal-gray-200);
`;

const PolicyTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--minimal-text-primary);
  margin-bottom: 16px;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const PolicySubtitle = styled.p`
  color: var(--minimal-text-secondary);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PolicyContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 32px 24px;
    border-radius: 12px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--minimal-text-primary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--minimal-gray-200);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
`;

const SubSectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--minimal-text-primary);
  margin: 24px 0 12px 0;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Paragraph = styled.p`
  color: var(--minimal-text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
  border-left: 4px solid #3b82f6;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const WarningBox = styled.div`
  background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%);
  border-left: 4px solid #f59e0b;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const List = styled.ul`
  margin: 16px 0;
  padding-left: 28px;

  li {
    color: var(--minimal-text-secondary);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 12px;

    strong {
      color: var(--minimal-text-primary);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.7;
    }
  }
`;

const ContactBox = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 32px;
  border-radius: 16px;
  margin-top: 40px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
    font-weight: 700;
  }

  p {
    font-size: 1.05rem;
    margin-bottom: 8px;
    opacity: 0.95;
  }

  a {
    color: white;
    text-decoration: underline;
    font-weight: 600;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    padding: 24px;

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--minimal-primary);
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 24px;
  transition: all 0.2s ease;

  &:hover {
    gap: 12px;
    color: #1e40af;
  }
`;

const SubscriptionPolicy: React.FC = () => {
  const { formatPrice } = usePrice();
  const membershipPrice = 9.99;

  return (
    <PolicyWrapper>
      <Container>
        <BackLink to="/">← Back to Home</BackLink>
        
        <PolicyHeader>
          <PolicyTitle>VIP Membership Subscription Policy</PolicyTitle>
          <PolicySubtitle>
            Complete information about our VIP Membership subscription, billing, cancellation, and terms
          </PolicySubtitle>
        </PolicyHeader>

        <PolicyContent>
          <Section>
            <SectionTitle>🌟 VIP Membership Overview</SectionTitle>
            
            <Paragraph>
              Our <strong>VIP Membership</strong> is designed to provide you with exclusive benefits and significant savings on all your copywriting course purchases. This subscription offers an enhanced learning experience with lifetime access to premium resources.
            </Paragraph>

            <HighlightBox>
              <SubSectionTitle>Membership Value & Benefits</SubSectionTitle>
              <List>
                <li><strong>Membership Price:</strong> {formatPrice(membershipPrice)} per month</li>
                <li><strong>Trial Period:</strong> 3-day free trial (you won't be charged during the trial)</li>
                <li><strong>Discount Rate:</strong> 20% off on all course purchases</li>
                <li><strong>Lifetime Access:</strong> All purchased courses remain accessible forever, even after cancellation</li>
                <li><strong>Priority Support:</strong> Get faster responses from our customer service team</li>
                <li><strong>Exclusive Content:</strong> Access to member-only resources and updates</li>
              </List>
            </HighlightBox>
          </Section>

          <Section>
            <SectionTitle>💳 Billing Cycle & Payment Terms</SectionTitle>
            
            <Paragraph>
              Understanding how billing works is crucial for managing your subscription effectively. Here's everything you need to know about our billing process:
            </Paragraph>

            <SubSectionTitle>Monthly Billing Schedule</SubSectionTitle>
            <Paragraph>
              Your VIP Membership operates on a <strong>monthly recurring billing cycle</strong>. This means:
            </Paragraph>

            <List>
              <li><strong>First 3 Days:</strong> FREE trial period - no charges applied</li>
              <li><strong>After Trial:</strong> You will be automatically billed {formatPrice(membershipPrice)} on the 4th day</li>
              <li><strong>Recurring Charges:</strong> Every 30 days thereafter, {formatPrice(membershipPrice)} will be charged to your payment method</li>
              <li><strong>Billing Date:</strong> Your billing date is set based on when you first subscribed (after the trial ends)</li>
              <li><strong>Payment Method:</strong> The same card or SEPA account used for signup will be charged automatically</li>
            </List>

            <WarningBox>
              <SubSectionTitle>⚠️ Important Billing Information</SubSectionTitle>
              <Paragraph>
                <strong>You will be billed on a monthly basis unless you cancel your membership.</strong> Charges are automatic and will continue until you take action to cancel. Make sure to cancel before your next billing date if you no longer wish to continue.
              </Paragraph>
            </WarningBox>

            <SubSectionTitle>Billing Descriptor</SubSectionTitle>
            <Paragraph>
              On your credit card or bank statement, the charge will appear as <strong>"COPYWRITING.ECOURSES"</strong>. This helps you identify the transaction easily when reviewing your statements.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>🚫 Cancellation Policy & Terms</SectionTitle>
            
            <Paragraph>
              We believe in providing complete flexibility with your subscription. You have full control over your membership and can cancel at any time with no penalties or cancellation fees.
            </Paragraph>

            <SubSectionTitle>How to Cancel Your Membership</SubSectionTitle>
            <Paragraph>
              To cancel your VIP Membership subscription, please contact our customer service team:
            </Paragraph>

            <List>
              <li><strong>Phone:</strong> {CONTACT_INFO.phoneFormatted} (Available CST Mon-Fri 8am-6pm)</li>
              <li><strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
              <li><strong>Response Time:</strong> Within 30 days of your cancellation request</li>
            </List>

            <SubSectionTitle>Cancellation Timeframe & Important Details</SubSectionTitle>
            
            <HighlightBox>
              <Paragraph>
                <strong>When Should You Cancel?</strong>
              </Paragraph>
              <List>
                <li><strong>During Trial (Days 1-3):</strong> Cancel anytime with zero charges</li>
                <li><strong>After Trial Begins:</strong> Cancel at least 24-48 hours before your next billing date to avoid being charged for the next month</li>
                <li><strong>Mid-Cycle Cancellation:</strong> If you cancel mid-cycle (e.g., on day 15 of your 30-day period), you will retain access until the end of your current billing period, but won't be charged for the next cycle</li>
              </List>
            </HighlightBox>

            <SubSectionTitle>What Happens After Cancellation?</SubSectionTitle>
            <List>
              <li><strong>Course Access:</strong> You will continue to have <strong>lifetime access</strong> to all courses you purchased while being a member</li>
              <li><strong>Membership Benefits:</strong> Your 20% discount benefit will end, but previously purchased courses remain accessible</li>
              <li><strong>No Refunds:</strong> Already paid membership fees are non-refundable, but you keep access until the period ends</li>
              <li><strong>Re-subscription:</strong> You can re-subscribe at any time to regain membership benefits</li>
            </List>

            <WarningBox>
              <SubSectionTitle>⏰ Critical Cancellation Window</SubSectionTitle>
              <Paragraph>
                <strong>To avoid being charged for the next billing cycle, you must cancel at least 24-48 hours before your billing date.</strong> Cancellations requested on or after your billing date will not prevent that month's charge, but will prevent future charges.
              </Paragraph>
            </WarningBox>
          </Section>

          <Section>
            <SectionTitle>📋 Additional Terms & Conditions</SectionTitle>
            
            <SubSectionTitle>Automatic Renewal</SubSectionTitle>
            <Paragraph>
              Your VIP Membership will <strong>automatically renew</strong> each month unless you cancel. This ensures uninterrupted access to your benefits. You will not receive a reminder before each renewal—it is your responsibility to track your billing date and cancel if desired.
            </Paragraph>

            <SubSectionTitle>Payment Failures</SubSectionTitle>
            <Paragraph>
              If a payment fails (due to insufficient funds, expired card, etc.):
            </Paragraph>
            <List>
              <li>We will attempt to process the payment again within 3-5 days</li>
              <li>You will receive an email notification about the failed payment</li>
              <li>If payment cannot be processed after multiple attempts, your membership will be suspended</li>
              <li>You can update your payment information at any time to maintain active membership</li>
            </List>

            <SubSectionTitle>Membership Modifications</SubSectionTitle>
            <Paragraph>
              We reserve the right to modify the membership price, benefits, or terms with <strong>30 days' advance notice</strong> to all active members. Existing members will be grandfathered into current pricing for at least 6 months after any price increase announcement.
            </Paragraph>

            <SubSectionTitle>Refund Policy for Membership Fees</SubSectionTitle>
            <Paragraph>
              Membership fees are <strong>non-refundable</strong>. However, course purchases made with your membership discount are covered under our standard <Link to="/refund-policy" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Refund Policy</Link>.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>🔒 Data & Privacy</SectionTitle>
            
            <Paragraph>
              Your payment information is processed securely and is never stored on our servers. We use industry-standard SSL encryption for all transactions. For more information, please review our <Link to="/privacy-policy" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Privacy Policy</Link>.
            </Paragraph>
          </Section>

          <ContactBox>
            <h3>📞 Need Help or Have Questions?</h3>
            <p>Our customer support team is here to assist you with any questions about your membership.</p>
            <p><strong>Phone:</strong> {CONTACT_INFO.phoneFormatted}</p>
            <p><strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></p>
            <p><strong>Hours:</strong> CST Monday-Friday, 8:00 AM - 6:00 PM</p>
            <p style={{ marginTop: '16px', fontSize: '0.95rem' }}>
              Please allow up to 30 days for cancellation requests to be processed.
            </p>
          </ContactBox>
        </PolicyContent>
      </Container>
    </PolicyWrapper>
  );
};

export default SubscriptionPolicy;
