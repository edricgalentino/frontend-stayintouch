import TitlePage from "@/components/Common/TitlePage";
import MainLayout from "@/components/Common/template/MainLayout";

const PrivacyPolicyPage = () => {
  const PrivacyPolicyData = [
    {
      id: 1,
      title: "Information Collection",
      content: [
        "We collect information provided by users during account creation and use of our services.",
        "Information collected may include but is not limited to usernames, email addresses, and content shared on the platform.",
      ],
    },
    {
      id: 2,
      title: "Use of Information",
      content: [
        "We use collected information to facilitate user interactions, improve our services, and personalize user experiences on Stay In Touch.",
      ],
    },
    {
      id: 3,
      title: "Information Sharing",
      content: ["We do not sell, trade, or share personal information with third parties without user consent unless required by law."],
    },
    {
      id: 4,
      title: "Security Measures",
      content: ["Stay In Touch employs security measures to protect user information; however, we cannot guarantee absolute security."],
    },
    {
      id: 5,
      title: "Cookie Policy",
      content: [
        "We use cookies to enhance user experiences on Stay In Touch. Users may manage cookie preferences through their browser settings.",
      ],
    },
    {
      id: 6,
      title: "Children's Privacy",
      content: ["Stay In Touch is not intended for children under 13 years of age. We do not knowingly collect information from children."],
    },
    {
      id: 7,
      title: "Changes to Privacy Policy",
      content: ["We reserve the right to update or modify our Privacy Policy. Users will be notified of any changes."],
    },
  ];
  return (
    <MainLayout className="flex w-full justify-center items-start px-4">
      <div className="flex flex-col gap-6 max-w-4xl justify-start items-start">
        <TitlePage
          title="Privacy Policy"
          description="At Stay In Touch, we are committed to protecting your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information:"
        />
        <div className="flex flex-col gap-4">
          {PrivacyPolicyData.map((term) => (
            <div className="w-full" key={term.id}>
              <h2 className="text-lg font-medium">{term.title}</h2>
              <ul className="list-disc list-inside">
                {term.content.map((content, index) => (
                  <li key={index} className="md:text-base text-sm">
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
