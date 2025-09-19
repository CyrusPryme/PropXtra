# Ghana PropTech Platform - Complete Product Specification

## A) Executive Summary

### Product Overview
**AccraProperties** is a modern, mobile-first Real Estate & Property Management Platform designed for Ghana's rental market, supporting residential buildings, multi-unit apartments, hostels, and university dormitories. The platform enables property owners and managers to streamline operations while providing tenants with digital-first experiences for payments, maintenance, and IoT device control.

### Key Value Propositions
- **For Property Owners**: Centralized portfolio management, remote IoT control, automated rent collection, and comprehensive analytics
- **For Property Managers**: Streamlined operations dashboard, maintenance workflow automation, and occupancy management
- **For Tenants/Students**: Mobile-first experience for payments (Mobile Money + cards), service booking, and smart device control
- **For Technicians**: Offline-capable mobile app with job routing, parts tracking, and proof-of-service capture

### Market Fit for Ghana
- **Payment Integration**: Native support for Paystack and Flutterwave (Mobile Money, cards, payment links)
- **Compliance**: Full adherence to Ghana Data Protection Act, 2012 (Act 843)
- **Mobile-First**: Designed for Ghana's mobile-heavy user base
- **Offline Capability**: Handles intermittent connectivity for field technicians

### Business Model
- SaaS subscription per property unit/bed
- Transaction fees on payment processing (3-5%)
- Premium IoT device integration services
- Value-added services (maintenance marketplace, energy monitoring)

---

## B) Technical Specification & Deliverables

### 1. Feature List by Persona

#### Owner/Super Admin (MVP)
- Portfolio overview dashboard ⭐ MVP
- Property performance analytics ⭐ MVP
- Remote IoT device control ⭐ MVP
- Monthly financial statements ⭐ MVP
- Tenant screening & approval 📋 Phase 2
- Dynamic pricing engine 🔮 Phase 3
- Predictive maintenance insights 🔮 Phase 3

#### Property Manager (MVP)
- Operations dashboard (occupancy, finances, maintenance) ⭐ MVP
- Tenant onboarding workflow ⭐ MVP
- Lease management & renewals ⭐ MVP
- Maintenance ticket assignment ⭐ MVP
- Announcement broadcasting ⭐ MVP
- Energy/water billing attribution 📋 Phase 2
- Visitor pre-approval system 📋 Phase 2
- Concierge chat management 🔮 Phase 3

#### Tenant/Student (MVP)
- Mobile payment (Mobile Money, cards) ⭐ MVP
- Maintenance request submission ⭐ MVP
- IoT device control (locks, lights) ⭐ MVP
- Service booking (laundry, cleaning) ⭐ MVP
- Announcements & event RSVP ⭐ MVP
- Utility usage tracking 📋 Phase 2
- Community marketplace 🔮 Phase 3
- Loyalty rewards program 🔮 Phase 3

#### Hostel/University Staff (MVP)
- Bed allocation & assignment ⭐ MVP
- Student check-in/check-out ⭐ MVP
- Attendance tracking ⭐ MVP
- Leave request approvals ⭐ MVP
- Parent notification system ⭐ MVP
- Academic calendar integration 📋 Phase 2

#### Technician (MVP)
- Job assignment & routing ⭐ MVP
- Offline job queue sync ⭐ MVP
- Parts inventory tracking ⭐ MVP
- Photo/signature proof-of-service ⭐ MVP
- Timesheet management ⭐ MVP
- AR troubleshooting guides 🔮 Phase 3

#### Accountant/Finance (MVP)
- Invoice generation & tracking ⭐ MVP
- Payment reconciliation ⭐ MVP
- Financial reporting ⭐ MVP
- Expense management ⭐ MVP
- Tax compliance reporting 📋 Phase 2

### 2. User Journeys & Stories

#### Story 1: Tenant Onboarding
**As a** new tenant, **I want to** complete my lease application and move-in process digitally **so that** I can secure housing without physical paperwork.

**Acceptance Criteria:**
- Upload ID documents via mobile app
- Complete background verification form
- Pay security deposit via Mobile Money
- Receive digital lease agreement
- Get smart lock access codes upon payment confirmation

**Journey Steps:**
1. Property search → Application → Document upload → Background check → Approval → Payment → Digital lease → Move-in

#### Story 2: Rent Payment
**As a** tenant, **I want to** pay my rent using Mobile Money or cards **so that** I can avoid cash transactions and late fees.

**Acceptance Criteria:**
- Multiple payment options (MTN Mobile Money, Vodafone Cash, Visa/Mastercard)
- Payment confirmation via SMS and app notification
- Automatic receipt generation
- Late payment reminders 3 days before due date
- Payment history accessible in app

**Journey Steps:**
1. Payment notification → Open app → Select payment method → Enter amount → Authenticate → Confirm → Receipt

#### Story 3: IoT Device Control
**As a** tenant, **I want to** control my room's smart lock and lights from my phone **so that** I can manage access and energy usage remotely.

**Acceptance Criteria:**
- Real-time device status display
- Remote lock/unlock capability
- Light dimming and scheduling
- Energy usage monitoring
- Offline command queuing

**Journey Steps:**
1. Open app → IoT devices tab → Select device → Control interface → Send command → Confirmation

#### Story 4: Maintenance Request
**As a** tenant, **I want to** report maintenance issues with photos **so that** repairs can be completed quickly.

**Acceptance Criteria:**
- Photo attachment capability
- Priority level selection
- Estimated resolution time display
- Real-time status updates
- Technician arrival notifications

**Journey Steps:**
1. Issue detection → Open app → New ticket → Add photos → Set priority → Submit → Track progress → Resolution

#### Story 5: Hostel Bed Assignment
**As a** hostel manager, **I want to** assign beds to students based on preferences and room availability **so that** I can optimize occupancy and student satisfaction.

**Acceptance Criteria:**
- Real-time bed availability matrix
- Student preference matching
- Automatic invoice generation
- Parent notification system
- Check-in date scheduling

**Journey Steps:**
1. Student application → Preference review → Availability check → Bed assignment → Parent approval → Payment → Confirmation

### 3. Wireframe Descriptions

#### Manager Dashboard
**Layout:** Header (logo, notifications, profile) + Sidebar (navigation) + Main (4-quadrant cards)
**Components:**
- `OccupancyOverview` (current/projected occupancy rates)
- `MaintenanceBoard` (open tickets, SLA status)
- `FinancialSummary` (collections, outstanding, cash flow)
- `PropertyHealth` (IoT device status, alerts)

#### Tenant Mobile App
**Layout:** Bottom tab navigation + Screen content
**Home Screen Components:**
- `PaymentStatus` (next due date, amount)
- `QuickActions` (pay rent, report issue, book service)
- `DeviceControls` (connected IoT devices)
- `Announcements` (recent building updates)

#### Technician Mobile App
**Layout:** Header + Job list/map toggle + Action buttons
**Components:**
- `JobQueue` (assigned jobs, priority indicators)
- `MapView` (job locations, routing)
- `JobDetails` (parts needed, instructions, photos)
- `TimeTracker` (clock in/out, billable hours)

#### Owner Portfolio App
**Layout:** Property selector + Dashboard cards
**Components:**
- `PropertySelector` (switch between properties)
- `PerformanceMetrics` (ROI, occupancy trends)
- `RemoteControl` (IoT device dashboard)
- `FinancialReports` (monthly statements, P&L)

### 4. Data Model (Textual ERD)

#### Core Entities

**Users**
```
- user_id (UUID, PK)
- email (unique)
- phone_number (Ghana format)
- role (enum: owner, manager, tenant, technician, accountant, admin)
- profile_data (JSON)
- created_at, updated_at
- gdpr_consent_date
```

**Properties**
```
- property_id (UUID, PK)
- owner_id (UUID, FK -> Users)
- name, address, property_type (residential, hostel, university)
- total_units, amenities (JSON)
- geolocation (lat, lng)
- created_at, updated_at
```

**Units/Beds**
```
- unit_id (UUID, PK)
- property_id (UUID, FK -> Properties)
- unit_number, unit_type (studio, 1br, bed, etc.)
- rent_amount, deposit_amount
- status (available, occupied, maintenance)
- amenities (JSON), floor_plan_url
```

**Leases**
```
- lease_id (UUID, PK)
- unit_id (UUID, FK -> Units)
- tenant_id (UUID, FK -> Users)
- start_date, end_date, rent_amount
- deposit_paid, lease_status (active, expired, terminated)
- lease_document_url, digital_signature
```

**IoT Devices**
```
- device_id (UUID, PK)
- unit_id (UUID, FK -> Units)
- device_type (smart_lock, light, thermostat, meter)
- manufacturer, model, firmware_version
- mqtt_topic, last_seen
- configuration (JSON)
```

**MaintenanceTickets**
```
- ticket_id (UUID, PK)
- unit_id (UUID, FK -> Units)
- reported_by (UUID, FK -> Users)
- assigned_to (UUID, FK -> Users)
- priority (low, medium, high, emergency)
- status (open, assigned, in_progress, resolved)
- description, photos (JSON array)
- estimated_cost, actual_cost
- created_at, resolved_at
```

**Payments**
```
- payment_id (UUID, PK)
- lease_id (UUID, FK -> Leases)
- amount, currency (GHS, USD)
- payment_method (mobile_money, card, cash)
- payment_gateway_id, transaction_ref
- status (pending, completed, failed, refunded)
- created_at, completed_at
```

**Announcements**
```
- announcement_id (UUID, PK)
- property_id (UUID, FK -> Properties)
- created_by (UUID, FK -> Users)
- title, content, priority
- target_audience (all, tenants, specific_units)
- expiry_date, is_event (boolean)
- rsvp_enabled, rsvp_count
```

#### Relationships
- Users (1:M) Properties (owner relationship)
- Properties (1:M) Units
- Units (1:M) Leases (historical)
- Units (1:1) Leases (current active lease)
- Units (1:M) IoT Devices
- Units (1:M) MaintenanceTickets
- Leases (1:M) Payments
- Properties (1:M) Announcements

### 5. API Surface & OpenAPI Specification

#### Core REST Endpoints

1. `POST /auth/login` - User authentication
2. `GET /properties/{id}/dashboard` - Property overview
3. `POST /properties/{id}/tickets` - Create maintenance ticket
4. `POST /workorders/{id}/assign` - Assign work to technician
5. `POST /payments/charge` - Process rent payment
6. `POST /devices/{id}/command` - Send IoT device command
7. `POST /devices/webhook` - Receive device telemetry
8. `GET /units/{id}/availability` - Check unit availability
9. `POST /leases` - Create new lease agreement
10. `GET /tenants/{id}/payments` - Payment history
11. `POST /announcements` - Broadcast announcement
12. `GET /analytics/occupancy` - Occupancy analytics

#### OpenAPI 3.0 Specification (Core Endpoints)

```yaml
openapi: 3.0.3
info:
  title: AccraProperties API
  version: 1.0.0
  description: Property Management Platform for Ghana
servers:
  - url: https://api.accraproperties.com/v1
    description: Production server

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  
  schemas:
    ErrorResponse:
      type: object
      properties:
        error:
          type: string
        message:
          type: string
        code:
          type: integer

security:
  - BearerAuth: []

paths:
  /auth/login:
    post:
      summary: User authentication
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                  format: email
                password:
                  type: string
                phone_number:
                  type: string
                  description: "Alternative login with phone"
              required:
                - password
      responses:
        '200':
          description: Login successful
          content:
            application/json:
              schema:
                type: object
                properties:
                  token:
                    type: string
                  user:
                    type: object
                    properties:
                      user_id:
                        type: string
                      email:
                        type: string
                      role:
                        type: string
        '401':
          description: Invalid credentials
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'

  /properties/{id}/tickets:
    post:
      summary: Create maintenance ticket
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                unit_id:
                  type: string
                  format: uuid
                priority:
                  type: string
                  enum: [low, medium, high, emergency]
                description:
                  type: string
                photos:
                  type: array
                  items:
                    type: string
                    format: uri
              required:
                - unit_id
                - priority
                - description
      responses:
        '201':
          description: Ticket created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  ticket_id:
                    type: string
                  estimated_resolution:
                    type: string
                    format: date-time

  /workorders/{id}/assign:
    post:
      summary: Assign work order to technician
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                technician_id:
                  type: string
                  format: uuid
                scheduled_date:
                  type: string
                  format: date-time
                estimated_duration:
                  type: integer
                  description: "Duration in minutes"
                parts_needed:
                  type: array
                  items:
                    type: string
              required:
                - technician_id
      responses:
        '200':
          description: Work order assigned successfully

  /payments/charge:
    post:
      summary: Process rent payment
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                lease_id:
                  type: string
                  format: uuid
                amount:
                  type: number
                currency:
                  type: string
                  enum: [GHS, USD]
                payment_method:
                  type: string
                  enum: [mobile_money, card, bank_transfer]
                payment_details:
                  type: object
                  description: "Gateway-specific payment details"
              required:
                - lease_id
                - amount
                - currency
                - payment_method
      responses:
        '200':
          description: Payment processed successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  payment_id:
                    type: string
                  status:
                    type: string
                  transaction_ref:
                    type: string

  /devices/{id}/command:
    post:
      summary: Send IoT device command
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                command:
                  type: string
                  enum: [lock, unlock, turn_on, turn_off, set_brightness]
                parameters:
                  type: object
                  description: "Command-specific parameters"
                timeout:
                  type: integer
                  default: 30
              required:
                - command
      responses:
        '200':
          description: Command sent successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  command_id:
                    type: string
                  status:
                    type: string
                    enum: [sent, acknowledged, completed, failed]

  /devices/webhook:
    post:
      summary: Receive device telemetry
      security: []  # Public endpoint with device authentication
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                device_id:
                  type: string
                timestamp:
                  type: string
                  format: date-time
                telemetry:
                  type: object
                  description: "Device-specific telemetry data"
                device_token:
                  type: string
                  description: "Device authentication token"
              required:
                - device_id
                - timestamp
                - telemetry
                - device_token
      responses:
        '200':
          description: Telemetry received successfully
```

### 6. IoT Architecture Design

#### Device Types Supported
1. **Smart Locks** (Matter, Z-Wave, Bluetooth)
   - Keyless entry, temporary codes
   - Battery monitoring, tamper alerts
   
2. **Smart Lights** (Matter, Zigbee)
   - Dimming, scheduling, energy monitoring
   - Motion sensor integration

3. **Utility Meters** (LoRaWAN, NB-IoT)
   - Water, electricity consumption
   - Automated billing attribution

4. **Environmental Sensors** (WiFi, Zigbee)
   - Temperature, humidity, air quality
   - Predictive maintenance insights

#### Communication Architecture

```
[IoT Devices] 
    ↓ (MQTT/CoAP/HTTPS)
[Edge Gateway/Hub]
    ↓ (MQTT over TLS)
[AWS IoT Core]
    ↓ (Rules Engine)
[Lambda Functions] → [PostgreSQL] → [WebSocket] → [Client Apps]
```

#### Protocols & Standards
- **Primary:** Matter (for interoperability)
- **Zigbee 3.0** via certified hubs (scalability up to 65k devices)
- **Z-Wave Plus** for reliable mesh networking
- **Bluetooth LE** for local control and setup
- **MQTT 3.1.1** with TLS 1.3 for cloud communication

#### Sample Telemetry Payload
```json
{
  "device_id": "smart_lock_001",
  "timestamp": "2024-01-15T10:30:00Z",
  "telemetry": {
    "battery_level": 85,
    "lock_state": "locked",
    "last_access": "2024-01-15T08:15:00Z",
    "access_method": "mobile_app",
    "signal_strength": -45
  },
  "device_token": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

#### Command Payload
```json
{
  "command_id": "cmd_12345",
  "device_id": "smart_lock_001",
  "command": "unlock",
  "parameters": {
    "duration": 300,
    "access_code": "temp_123456"
  },
  "timeout": 30
}
```

#### Security Measures
1. **Device Authentication:** X.509 certificates + device tokens
2. **Communication:** Mutual TLS (mTLS) for all cloud communications
3. **OTA Updates:** Signed firmware with rollback capability
4. **Provisioning:** FIDO2/WebAuthn for secure device registration

### 7. Payment & Billing Design

#### Ghana Payment Integration

**Primary Providers:**
1. **Paystack** - Cards, Mobile Money (MTN, Vodafone, AirtelTigo), Payment Links
2. **Flutterwave** - Cross-border payments, Enterprise features

#### Payment Flow Architecture
```
[Tenant App] → [Payment Gateway] → [Mobile Money Provider/Bank] 
     ↓                                    ↓
[Webhook Handler] ← [Payment Confirmation] ←
     ↓
[Invoice Update] → [Notification Service]
```

#### Mobile Money Integration
```json
// Paystack Mobile Money Charge
{
  "amount": 50000,
  "currency": "GHS",
  "channel": "mobile_money",
  "mobile_money": {
    "phone": "+233541234567",
    "provider": "mtn"
  },
  "metadata": {
    "lease_id": "lease_12345",
    "tenant_id": "tenant_67890"
  }
}
```

#### Billing Components
1. **Base Rent** - Monthly recurring
2. **Utilities** - Variable based on meter readings
3. **Service Add-ons** - Laundry, cleaning (₵10-50)
4. **Late Fees** - 5% after 5-day grace period
5. **Deposits** - 1-3 months rent equivalent

#### USSD Fallback Flow
For tenants without smartphones:
```
*713*123*456# → Enter Tenant ID → Enter Amount → 
Confirm Payment → Receive SMS Confirmation
```

### 8. Maintenance & Field Operations

#### Workflow Design
```
Ticket Creation → Auto-Assignment → Scheduling → 
Technician Dispatch → Work Completion → Quality Check → Billing
```

#### SLA Rules Engine
- **Emergency:** 2 hours (gas leak, electrical hazard)
- **High:** 24 hours (no water, heating/cooling)
- **Medium:** 3 days (appliance repair)
- **Low:** 7 days (cosmetic issues)

#### Technician Mobile Features
1. **Offline Job Queue:** SQLite local storage with sync
2. **GPS Routing:** Integration with Google Maps
3. **Parts Inventory:** Barcode scanning + availability check
4. **Proof of Service:** Photos, signatures, time tracking
5. **Communication:** Chat with tenant and manager

#### Sample Work Order
```json
{
  "work_order_id": "wo_12345",
  "ticket_id": "ticket_67890",
  "technician_id": "tech_001",
  "scheduled_date": "2024-01-16T09:00:00Z",
  "estimated_duration": 120,
  "parts_needed": [
    {"part_id": "faucet_001", "quantity": 1},
    {"part_id": "wrench_set", "quantity": 1}
  ],
  "instructions": "Replace kitchen faucet, check for leaks",
  "priority": "medium"
}
```

### 9. Notifications & Announcements

#### Notification Channels
1. **Push Notifications:** Firebase Cloud Messaging
2. **SMS:** Twilio with Ghana local numbers
3. **Email:** SendGrid with branded templates
4. **In-App:** Real-time via WebSocket

#### Escalation Rules
```yaml
Critical Alerts (Gas/Water/Fire):
  - Immediate: SMS + Push + Phone call
  - 5 min: Manager notification
  - 15 min: Owner notification
  - 30 min: Emergency services alert

Maintenance SLA Breach:
  - 1 hour before: Technician reminder
  - At SLA: Manager notification
  - 2 hours after: Auto-reassignment
```

#### Event Announcements
```json
{
  "announcement_id": "ann_12345",
  "title": "Building Maintenance - Water Shutdown",
  "content": "Scheduled water maintenance on Jan 20, 8AM-12PM",
  "priority": "high",
  "target_audience": ["building_A", "building_B"],
  "is_event": true,
  "event_date": "2024-01-20T08:00:00Z",
  "rsvp_enabled": false,
  "channels": ["push", "sms", "email"]
}
```

### 10. Security & Compliance

#### Ghana Data Protection Act, 2012 (Act 843) Compliance

**Data Processing Lawful Bases:**
1. **Contract Performance** - Lease agreements, payment processing
2. **Legitimate Interest** - Property management, maintenance
3. **Consent** - Marketing communications, analytics

**Data Subject Rights Implementation:**
- **Access:** Self-service portal for data download
- **Rectification:** Profile editing capabilities
- **Erasure:** Automated anonymization after lease termination
- **Portability:** JSON/CSV export functionality

#### Security Measures
1. **Encryption:**
   - Transit: TLS 1.3 for all communications
   - Rest: AES-256 for database encryption
   - Application: Vault for secrets management

2. **Access Control:**
   - JWT tokens with 15-minute expiry
   - Role-based permissions (RBAC)
   - Multi-factor authentication for admin roles

3. **Audit Logging:**
   - All API calls logged with user context
   - GDPR-compliant log retention (7 years)
   - Automated anomaly detection

#### Sample RBAC Roles
```yaml
super_admin:
  - properties:*
  - users:*
  - system:*

owner_admin:
  - properties:read,update (owned only)
  - tenants:read,create,update (owned properties)
  - analytics:read (owned properties)

property_manager:
  - properties:read,update (assigned only)
  - tenants:read,create,update (assigned properties)
  - maintenance:* (assigned properties)

tenant:
  - profile:read,update (own only)
  - payments:create,read (own only)
  - devices:read,control (assigned unit only)
```

### 11. Analytics & Operations

#### Key Performance Indicators (KPIs)
1. **Occupancy Rate:** Current and projected occupancy %
2. **Collection Rate:** On-time payment percentage
3. **MTTR:** Mean Time To Resolution for maintenance
4. **Vacancy Fill Time:** Average days to fill empty units
5. **Tenant Satisfaction:** NPS score from surveys
6. **Energy Efficiency:** kWh per unit per month
7. **Maintenance Cost:** % of rent revenue

#### Dashboard Components
```json
{
  "occupancy_widget": {
    "current_rate": 94.5,
    "trend": "+2.1%",
    "vacant_units": 12,
    "available_soon": 3
  },
  "financial_widget": {
    "monthly_revenue": 125000,
    "collection_rate": 96.8,
    "outstanding": 15000,
    "trend": "+5.2%"
  },
  "maintenance_widget": {
    "open_tickets": 23,
    "overdue_tickets": 3,
    "avg_resolution_time": "2.3 days",
    "cost_trend": "-8.1%"
  }
}
```

#### AI-Driven Features (Phase 2/3)
1. **Predictive Maintenance:** ML models analyzing device telemetry
2. **Occupancy Forecasting:** Seasonal trends + local events
3. **Dynamic Pricing:** Market rates + demand prediction
4. **Tenant Matching:** Preferences + unit characteristics

### 12. Tech Stack Recommendations

#### Frontend
- **Web Admin:** Next.js 14 (React 18, TypeScript)
- **Mobile Apps:** React Native 0.73 + Expo SDK 50
- **State Management:** Zustand + React Query
- **UI Components:** NativeBase (mobile), Chakra UI (web)

#### Backend
- **API:** Node.js 20 + Express.js + TypeScript
- **Database:** PostgreSQL 16 (primary), Redis 7 (cache/sessions)
- **Message Bus:** Apache Kafka (event streaming)
- **IoT Gateway:** AWS IoT Core + Lambda
- **File Storage:** AWS S3 with CloudFront CDN

#### Infrastructure
```yaml
Production Environment:
  Hosting: AWS (Ghana region planned, fallback to eu-west-1)
  Compute: ECS Fargate + Application Load Balancer
  Database: RDS PostgreSQL Multi-AZ
  Cache: ElastiCache Redis Cluster
  CDN: CloudFront + S3
  Monitoring: DataDog + Sentry
  CI/CD: GitHub Actions + AWS CodeDeploy
  
Development Environment:
  Docker Compose for local development
  GitHub Codespaces for remote development
  Staging: Scaled-down AWS environment
```

#### Infrastructure Diagram
```
Internet → CloudFront → ALB → ECS Fargate → RDS PostgreSQL
    ↓                              ↓
Mobile Apps ← API Gateway ← Lambda ← IoT Core ← Devices
    ↓                              ↓
Push Notifications ← SNS ← SQS ← Event Bus (Kafka)
```

#### Third-Party Integrations
- **Payments:** Paystack SDK, Flutterwave API
- **Maps:** Google Maps SDK (mobile), Mapbox (web)
- **Notifications:** Firebase (push), Twilio (SMS), SendGrid (email)
- **Analytics:** Mixpanel (user events), Amplitude (product analytics)
- **Monitoring:** DataDog (APM), Sentry (error tracking)

### 13. Developer Setup & Repository Structure

#### Repository Structure
```
accra-properties/
├── apps/
│   ├── admin-web/          # Next.js admin dashboard
│   ├── tenant-mobile/      # React Native tenant app
│   ├── technician-mobile/  # React Native field app
│   └── api/               # Node.js Express API
├── packages/
│   ├── shared-types/      # TypeScript interfaces
│   ├── ui-components/     # Shared UI library
│   └── utils/            # Common utilities
├── infrastructure/
│   ├── terraform/        # Infrastructure as Code
│   ├── docker/          # Container definitions
│   └── k8s/            # Kubernetes manifests
└── docs/
    ├── api/            # OpenAPI documentation
    └── guides/         # Development guides
```

#### Environment Variables
```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/accra_properties
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRY=15m

# Payment Gateways
PAYSTACK_SECRET_KEY=sk_test_xxx
PAYSTACK_PUBLIC_KEY=pk_test_xxx
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-xxx

# IoT & Messaging
AWS_IOT_ENDPOINT=xxx.iot.us-east-1.amazonaws.com
TWILIO_ACCOUNT_SID=ACxxx
TWILIO_AUTH_TOKEN=xxx
FIREBASE_SERVER_KEY=xxx

# External Services
GOOGLE_MAPS_API_KEY=AIzaxxx
SENDGRID_API_KEY=SG.xxx
```

#### Recommended SDKs & Libraries
```json
{
  "payment_integration": {
    "@paystack/paystack-sdk": "^2.0.0",
    "flutterwave-node-v3": "^1.1.0"
  },
  "iot_integration": {
    "aws-iot-device-sdk-js": "^2.2.13",
    "mqtt": "^5.0.0",
    "node-matter": "^1.0.0"
  },
  "mobile_development": {
    "react-native": "0.73.0",
    "@react-native-async-storage/async-storage": "^1.19.0",
    "@react-native-camera/camera": "^4.2.1",
    "react-native-maps": "^1.8.0"
  },
  "backend_core": {
    "express": "^4.18.0",
    "typeorm": "^0.3.17",
    "joi": "^17.9.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0"
  }
}
```

### 14. UI Copy Pack

#### Authentication Flow
```
LOGIN_TITLE: "Welcome to AccraProperties"
LOGIN_SUBTITLE: "Manage your property with ease"
EMAIL_PLACEHOLDER: "Enter your email"
PHONE_PLACEHOLDER: "Enter phone number (+233...)"
PASSWORD_PLACEHOLDER: "Enter password"
LOGIN_BUTTON: "Sign In"
FORGOT_PASSWORD: "Forgot Password?"
```

#### Manager Dashboard
```
DASHBOARD_TITLE: "Property Overview"
OCCUPANCY_CARD_TITLE: "Occupancy Rate"
MAINTENANCE_CARD_TITLE: "Maintenance Board"
FINANCE_CARD_TITLE: "Financial Summary"
QUICK_ACTIONS: "Quick Actions"
VIEW_ALL_PROPERTIES: "View All Properties"
ADD_NEW_TENANT: "Add New Tenant"
```

#### Tenant Mobile App
```
HOME_GREETING: "Hello, {tenant_name}"
NEXT_PAYMENT_DUE: "Next payment due: {date}"
PAY_RENT_BUTTON: "Pay Rent (GH₵{amount})"
REPORT_ISSUE_BUTTON: "Report Issue"
BOOK_SERVICE_BUTTON: "Book Service"
MY_DEVICES_TITLE: "My Smart Devices"
ANNOUNCEMENTS_TITLE: "Building Updates"
```

#### Payment Flow
```
PAYMENT_TITLE: "Pay Your Rent"
PAYMENT_AMOUNT: "Amount Due: GH₵{amount}"
SELECT_METHOD: "Select Payment Method"
MOBILE_MONEY: "Mobile Money"
CARD_PAYMENT: "Debit/Credit Card"
PROCESSING_PAYMENT: "Processing your payment..."
PAYMENT_SUCCESS: "Payment Successful!"
PAYMENT_FAILED: "Payment Failed. Please try again."
```

#### Maintenance Request
```
MAINTENANCE_TITLE: "Report Issue"
ISSUE_TYPE: "What type of issue?"
PRIORITY_URGENT: "Urgent (Safety concern)"
PRIORITY_HIGH: "High (Major inconvenience)"
PRIORITY_NORMAL: "Normal (Minor issue)"
DESCRIBE_ISSUE: "Describe the issue"
ADD_PHOTOS: "Add Photos (Optional)"
SUBMIT_REQUEST: "Submit Request"
TRACKING_NUMBER: "Request submitted! Tracking: #{ticket_id}"
```

#### Hostel Management
```
BED_ASSIGNMENT_TITLE: "Assign Bed"
STUDENT_INFO: "Student Information"
ROOM_PREFERENCES: "Room Preferences"
AVAILABLE_BEDS: "Available Beds"
ASSIGN_BED_BUTTON: "Assign Bed"
NOTIFY_PARENTS: "Notify Parents"
CHECK_IN_DATE: "Check-in Date"
```

---

## C) Implementation Plan

### 1. 8-Week MVP Development Schedule

#### Week 1-2: Foundation & Core Setup
**Milestones:**
- Development environment setup
- Database schema implementation
- Authentication & authorization system
- Basic API endpoints (auth, users, properties)

**Deliverables:**
- Running development environment
- User registration/login flows
- Basic property management CRUD

#### Week 3-4: Property Management Core
**Milestones:**
- Property & unit management
- Tenant onboarding workflow
- Lease management system
- Basic manager dashboard

**Deliverables:**
- Web admin dashboard (MVP)
- Tenant registration process
- Property portfolio management

#### Week 5-6: Mobile Apps & Payments
**Milestones:**
- Tenant mobile app (core features)
- Payment integration (Paystack)
- Maintenance ticket system
- Push notifications

**Deliverables:**
- iOS/Android tenant app
- Mobile Money payment flow
- Basic maintenance workflow

#### Week 7-8: IoT Integration & Testing
**Milestones:**
- Smart lock integration
- IoT device management
- End-to-end testing
- Performance optimization

**Deliverables:**
- IoT device control
- Comprehensive test suite
- Production deployment scripts
- User documentation

### 2. Testing Strategy

#### Unit Testing
- **Backend:** Jest + Supertest (80%+ code coverage)
- **Frontend:** Jest + React Testing Library
- **Mobile:** Jest + React Native Testing Library

#### Integration Testing
- **API Integration:** Postman collection + Newman CLI
- **Payment Gateway:** Sandbox environment testing
- **Database:** Automated migration testing

#### IoT Integration Testing Lab
- **Physical Devices:** Smart locks, sensors in controlled environment
- **Network Simulation:** Various connectivity scenarios
- **Security Testing:** Device authentication, command validation

#### End-to-End Testing
- **Web Flows:** Playwright automated browser testing
- **Mobile Flows:** Detox for React Native E2E testing
- **User Journeys:** Critical path automation (payment, maintenance, IoT control)

### 3. Pilot Rollout Plan (Accra)

#### Phase 1: Single Property (Week 9-10)
- **Target:** One 50-unit residential building in East Legon
- **Scope:** 20 existing tenants, full feature set
- **Success Criteria:** 
  - 90%+ tenant app adoption
  - 50%+ mobile payment usage
  - <24hr maintenance response time

#### Phase 2: Multi-Property (Week 11-14)
- **Target:** 3-5 properties, 200+ units total
- **Scope:** Mixed residential + hostel properties
- **Success Criteria:**
  - 85%+ occupancy rate maintained
  - 95%+ payment collection rate
  - <2hr critical issue response

#### Phase 3: Full Pilot (Week 15-20)
- **Target:** 10+ properties, 500+ units
- **Scope:** Full feature rollout including advanced IoT
- **Success Criteria:**
  - 92%+ tenant satisfaction (NPS >50)
  - 30%+ operational cost reduction
  - Break-even on pilot investment

### 4. Training & Onboarding Plan

#### Property Managers (2-day intensive)
**Day 1: Platform Overview**
- Dashboard navigation
- Tenant onboarding process
- Payment processing & reconciliation
- Basic maintenance workflow

**Day 2: Advanced Features**
- IoT device management
- Analytics & reporting
- Troubleshooting common issues
- Customer support escalation

#### Technicians (1-day workshop)
- Mobile app installation & setup
- Job assignment & routing
- Photo documentation standards
- Parts inventory management
- Offline mode usage

#### Tenant Orientation (30-min sessions)
- Mobile app download & setup
- Payment methods demonstration
- IoT device control basics
- Maintenance request process

### 5. Success Metrics & Acceptance Criteria

#### MVP Release Criteria
**Technical:**
- 99.5% API uptime
- <200ms average API response time
- Zero critical security vulnerabilities
- Mobile app store approval (iOS/Android)

**Business:**
- 80%+ tenant mobile app adoption
- 70%+ mobile payment adoption
- 90%+ maintenance ticket resolution within SLA
- <5% payment failure rate

#### 6-Month Success Metrics
**Operational Efficiency:**
- 40% reduction in manual property management tasks
- 50% reduction in payment collection time
- 25% improvement in maintenance response time
- 90%+ tenant satisfaction score

**Financial Performance:**
- 15% improvement in rent collection rate
- 20% reduction in property management costs
- 95%+ payment success rate
- <3% customer churn rate

### 6. Risk Assessment & Mitigation

#### Technical Risks

**Risk: Payment Gateway Downtime**
- *Probability:* Medium
- *Impact:* High
- *Mitigation:* Dual gateway integration (Paystack + Flutterwave), offline payment recording

**Risk: IoT Device Connectivity Issues**
- *Probability:* Medium
- *Impact:* Medium
- *Mitigation:* Local hub redundancy, graceful degradation, manual override options

**Risk: Mobile Network Reliability**
- *Probability:* High (Ghana context)
- *Impact:* Medium
- *Mitigation:* Offline-first mobile app design, SMS fallbacks, progressive sync

#### Business Risks

**Risk: Low Tenant Adoption**
- *Probability:* Medium
- *Impact:* High
- *Mitigation:* Incentive programs, comprehensive training, gradual rollout

**Risk: Regulatory Changes**
- *Probability:* Low
- *Impact:* High
- *Mitigation:* Legal compliance monitoring, modular architecture for quick updates

**Risk: Competitor Entry**
- *Probability:* High
- *Impact:* Medium
- *Mitigation:* Strong tenant relationships, continuous feature development, pricing flexibility

---

## D) JSON Configuration File

```json
{
  "project_config": {
    "name": "AccraProperties",
    "version": "1.0.0",
    "target_market": "Ghana",
    "primary_city": "Accra"
  },
  
  "features": [
    {
      "category": "Authentication & Users",
      "items": [
        {"name": "User Registration/Login", "priority": "MVP", "effort": "M"},
        {"name": "Role-based Access Control", "priority": "MVP", "effort": "L"},
        {"name": "Multi-factor Authentication", "priority": "Phase2", "effort": "M"},
        {"name": "Social Login Integration", "priority": "Phase3", "effort": "S"}
      ]
    },
    {
      "category": "Property Management",
      "items": [
        {"name": "Property Portfolio Management", "priority": "MVP", "effort": "L"},
        {"name": "Unit/Bed Management", "priority": "MVP", "effort": "M"},
        {"name": "Lease Management", "priority": "MVP", "effort": "L"},
        {"name": "Tenant Onboarding Workflow", "priority": "MVP", "effort": "M"},
        {"name": "Digital Lease Signing", "priority": "Phase2", "effort": "L"},
        {"name": "Automated Rent Increases", "priority": "Phase3", "effort": "M"}
      ]
    },
    {
      "category": "Payments & Billing",
      "items": [
        {"name": "Mobile Money Integration", "priority": "MVP", "effort": "L"},
        {"name": "Credit/Debit Card Processing", "priority": "MVP", "effort": "M"},
        {"name": "Invoice Generation", "priority": "MVP", "effort": "S"},
        {"name": "Payment Reconciliation", "priority": "MVP", "effort": "M"},
        {"name": "Automated Late Fee Calculation", "priority": "Phase2", "effort": "S"},
        {"name": "Split Billing (Utilities)", "priority": "Phase2", "effort": "L"}
      ]
    },
    {
      "category": "IoT & Smart Devices",
      "items": [
        {"name": "Smart Lock Integration", "priority": "MVP", "effort": "L"},
        {"name": "Smart Lighting Control", "priority": "MVP", "effort": "M"},
        {"name": "Utility Meter Reading", "priority": "Phase2", "effort": "L"},
        {"name": "Environmental Sensors", "priority": "Phase2", "effort": "M"},
        {"name": "Predictive Maintenance", "priority": "Phase3", "effort": "XL"}
      ]
    },
    {
      "category": "Maintenance & Operations",
      "items": [
        {"name": "Maintenance Request System", "priority": "MVP", "effort": "M"},
        {"name": "Technician Job Assignment", "priority": "MVP", "effort": "M"},
        {"name": "Work Order Management", "priority": "MVP", "effort": "L"},
        {"name": "Parts Inventory Tracking", "priority": "Phase2", "effort": "L"},
        {"name": "SLA Monitoring & Alerts", "priority": "Phase2", "effort": "M"},
        {"name": "Predictive Maintenance Analytics", "priority": "Phase3", "effort": "XL"}
      ]
    },
    {
      "category": "Mobile Applications",
      "items": [
        {"name": "Tenant Mobile App", "priority": "MVP", "effort": "XL"},
        {"name": "Technician Mobile App", "priority": "MVP", "effort": "L"},
        {"name": "Property Manager Mobile App", "priority": "Phase2", "effort": "L"},
        {"name": "Offline Capability", "priority": "MVP", "effort": "L"}
      ]
    },
    {
      "category": "Hostel & University Features",
      "items": [
        {"name": "Bed Allocation System", "priority": "MVP", "effort": "M"},
        {"name": "Student Check-in/Check-out", "priority": "MVP", "effort": "M"},
        {"name": "Attendance Tracking", "priority": "MVP", "effort": "S"},
        {"name": "Parent Notification System", "priority": "MVP", "effort": "M"},
        {"name": "Leave Request Management", "priority": "Phase2", "effort": "S"},
        {"name": "Academic Calendar Integration", "priority": "Phase3", "effort": "M"}
      ]
    },
    {
      "category": "Analytics & Reporting",
      "items": [
        {"name": "Occupancy Analytics", "priority": "MVP", "effort": "M"},
        {"name": "Financial Reporting", "priority": "MVP", "effort": "M"},
        {"name": "Maintenance Analytics", "priority": "Phase2", "effort": "M"},
        {"name": "Predictive Analytics", "priority": "Phase3", "effort": "XL"},
        {"name": "Custom Dashboard Builder", "priority": "Phase3", "effort": "L"}
      ]
    }
  ],
  
  "api_endpoints": {
    "authentication": [
      {"method": "POST", "path": "/auth/login", "description": "User login"},
      {"method": "POST", "path": "/auth/logout", "description": "User logout"},
      {"method": "POST", "path": "/auth/refresh", "description": "Token refresh"}
    ],
    "properties": [
      {"method": "GET", "path": "/properties", "description": "List properties"},
      {"method": "POST", "path": "/properties", "description": "Create property"},
      {"method": "GET", "path": "/properties/{id}/dashboard", "description": "Property dashboard"},
      {"method": "POST", "path": "/properties/{id}/tickets", "description": "Create maintenance ticket"}
    ],
    "payments": [
      {"method": "POST", "path": "/payments/charge", "description": "Process payment"},
      {"method": "GET", "path": "/payments/{id}", "description": "Get payment details"},
      {"method": "POST", "path": "/payments/webhook", "description": "Payment webhook"}
    ],
    "iot": [
      {"method": "POST", "path": "/devices/{id}/command", "description": "Send device command"},
      {"method": "POST", "path": "/devices/webhook", "description": "Device telemetry webhook"},
      {"method": "GET", "path": "/devices/{id}/status", "description": "Get device status"}
    ],
    "maintenance": [
      {"method": "POST", "path": "/workorders/{id}/assign", "description": "Assign work order"},
      {"method": "PUT", "path": "/workorders/{id}/complete", "description": "Complete work order"},
      {"method": "GET", "path": "/technicians/{id}/jobs", "description": "Get technician jobs"}
    ]
  },
  
  "tech_stack": {
    "frontend": {
      "web": "Next.js 14 + TypeScript",
      "mobile": "React Native 0.73 + Expo",
      "ui_library": "NativeBase + Chakra UI",
      "state_management": "Zustand + React Query"
    },
    "backend": {
      "runtime": "Node.js 20",
      "framework": "Express.js + TypeScript",
      "database": "PostgreSQL 16",
      "cache": "Redis 7",
      "message_queue": "Apache Kafka",
      "file_storage": "AWS S3"
    },
    "infrastructure": {
      "hosting": "AWS",
      "containers": "Docker + ECS Fargate",
      "cdn": "CloudFront",
      "monitoring": "DataDog + Sentry",
      "ci_cd": "GitHub Actions"
    },
    "third_party": {
      "payments": ["Paystack", "Flutterwave"],
      "maps": "Google Maps API",
      "notifications": ["Firebase", "Twilio", "SendGrid"],
      "iot_platform": "AWS IoT Core",
      "analytics": "Mixpanel"
    }
  },
  
  "compliance": {
    "data_protection": "Ghana Data Protection Act, 2012 (Act 843)",
    "payments": "Bank of Ghana Payment Systems Act",
    "privacy": "GDPR-like implementation",
    "security": ["SOC 2 Type II", "ISO 27001 preparation"]
  },
  
  "deployment_timeline": {
    "mvp_development": "8 weeks",
    "testing_phase": "2 weeks",
    "pilot_rollout": "12 weeks",
    "full_launch": "6 months"
  }
}
```

## Manager Dashboard JSON Layout Example

```json
{
  "dashboard_layout": {
    "header": {
      "component": "DashboardHeader",
      "props": {
        "title": "Property Overview",
        "user_menu": true,
        "notifications": true,
        "search_enabled": true
      }
    },
    "sidebar": {
      "component": "NavigationSidebar",
      "props": {
        "collapsed": false,
        "menu_items": [
          {"id": "dashboard", "label": "Dashboard", "icon": "home", "active": true},
          {"id": "properties", "label": "Properties", "icon": "building"},
          {"id": "tenants", "label": "Tenants", "icon": "users"},
          {"id": "maintenance", "label": "Maintenance", "icon": "tools"},
          {"id": "payments", "label": "Payments", "icon": "credit-card"},
          {"id": "analytics", "label": "Analytics", "icon": "chart"},
          {"id": "settings", "label": "Settings", "icon": "settings"}
        ]
      }
    },
    "main_content": {
      "component": "DashboardGrid",
      "props": {
        "columns": 4,
        "gap": "md",
        "widgets": [
          {
            "component": "OccupancyOverview",
            "grid_position": {"col_span": 2, "row_span": 1},
            "props": {
              "title": "Occupancy Rate",
              "current_rate": 94.5,
              "trend": "+2.1%",
              "vacant_units": 12,
              "chart_type": "donut"
            }
          },
          {
            "component": "FinancialSummary",
            "grid_position": {"col_span": 2, "row_span": 1},
            "props": {
              "title": "Financial Overview",
              "monthly_revenue": 125000,
              "collection_rate": 96.8,
              "outstanding": 15000,
              "currency": "GHS"
            }
          },
          {
            "component": "MaintenanceBoard",
            "grid_position": {"col_span": 3, "row_span": 2},
            "props": {
              "title": "Maintenance Tickets",
              "open_tickets": 23,
              "overdue_tickets": 3,
              "avg_resolution_time": "2.3 days",
              "show_recent_tickets": true,
              "max_items": 5
            }
          },
          {
            "component": "PropertyHealth",
            "grid_position": {"col_span": 1, "row_span": 2},
            "props": {
              "title": "IoT Devices",
              "online_devices": 156,
              "offline_devices": 8,
              "alerts": 2,
              "show_device_list": true
            }
          },
          {
            "component": "RecentActivity",
            "grid_position": {"col_span": 4, "row_span": 1},
            "props": {
              "title": "Recent Activity",
              "max_items": 8,
              "activity_types": ["payments", "maintenance", "tenant_actions", "system_alerts"]
            }
          }
        ]
      }
    },
    "quick_actions": {
      "component": "QuickActionsPanel",
      "props": {
        "position": "floating",
        "actions": [
          {"id": "add_tenant", "label": "Add Tenant", "icon": "user-plus", "color": "blue"},
          {"id": "create_ticket", "label": "Create Ticket", "icon": "tool", "color": "orange"},
          {"id": "send_announcement", "label": "Announcement", "icon": "megaphone", "color": "green"},
          {"id": "generate_report", "label": "Generate Report", "icon": "file-text", "color": "purple"}
        ]
      }
    }
  }
}
```

---

This comprehensive specification provides a production-ready blueprint for developing a modern Property Management Platform tailored specifically for Ghana's market. The system balances innovative features like IoT integration and mobile-first design with practical considerations like Mobile Money payments and offline capabilities essential for the Ghanaian context.

The modular architecture and phased development approach ensure rapid MVP delivery while providing a clear path for scaling and adding advanced features. The emphasis on compliance with Ghana's Data Protection Act and integration with local payment providers makes this a viable solution for the Accra property management market.