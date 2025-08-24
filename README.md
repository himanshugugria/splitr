# Splitr 💸

**Splitr** is a modern, real-time web application designed to simplify expense sharing among friends, family, and roommates. Say goodbye to awkward conversations and complicated spreadsheets—Splitr handles the math, so you can focus on the moments.

Built with a powerful tech stack including Next.js, Convex, and Clerk, this app provides a seamless and secure experience for tracking shared bills and settling up debts.

## ✨ Key Features

* **👥 Group Management:** Create custom groups for trips, households, or any shared event.
* **✍️ Add Expenses:** Easily add new expenses, specify who paid, and select who participated in the bill.
* **📊 Real-Time Balances:** See exactly who owes whom in real-time. The dashboard updates instantly for all group members.
* **🔐 Secure Authentication:** User accounts are securely managed by Clerk, offering reliable and easy sign-in options.
* **🚀 Blazing Fast Backend:** Powered by Convex, the app's backend is fully reactive, ensuring data is always in sync without needing to refresh.
* **🎨 Clean & Responsive UI:** A modern and intuitive interface built with Tailwind CSS that looks great on any device.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (with App Router)
* **Backend & Database:** [Convex](https://www.convex.dev/)
* **Authentication:** [Clerk](https://clerk.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

* Node.js (v18 or later)
* npm or yarn
* A free [Convex](https://dashboard.convex.dev/) account
* A free [Clerk](https://dashboard.clerk.com/) account

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/splitr.git](https://github.com/your-username/splitr.git)
    cd splitr
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Convex:**
    * Log in to your Convex account:
        ```bash
        npx convex dev
        ```
    * Follow the CLI prompts to link your project. This will create a `convex/` directory and your schema files.

4.  **Set up Clerk:**
    * Create a new application in your Clerk dashboard.
    * Navigate to **API Keys** and copy your **Publishable Key** and **Secret Key**.

5.  **Environment Variables:**
    * Create a `.env.local` file in the root of your project.
    * Add the necessary environment variables from Clerk and Convex:
        ```env
        # Clerk
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
        CLERK_SECRET_KEY=sk_test_...

        # Convex
        NEXT_PUBLIC_CONVEX_URL=[https://your-project-name.convex.cloud](https://your-project-name.convex.cloud)
        ```
    * You will also need to configure a JWT template in Clerk for Convex. Follow the [official Convex + Clerk documentation](https://docs.convex.dev/auth/clerk) to set this up.

6.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the app, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
