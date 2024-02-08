import TitlePage from "@/components/Common/TitlePage";
import MainLayout from "@/components/Common/template/MainLayout";

const TermsOfUse = () => {
  const TermsOfUseData = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using Stay In Touch, you agree to comply with these Terms of Use and our Privacy Policy.",
        "If you disagree with any part of these Terms, please refrain from using our services.",
      ],
    },
    {
      id: 2,
      title: "User Conduct",
      content: [
        "Users must use Stay In Touch for lawful purposes and in a manner that respects the rights and privacy of others.",
        "Any content shared or interactions on the platform must comply with applicable laws and not infringe upon the rights of others.",
      ],
    },
    {
      id: 3,
      title: "Confidentiality and Anonymity",
      content: [
        "Stay In Touch respects user anonymity and confidentiality to the best of our ability. However, we cannot guarantee complete anonymity in interactions on the platform.",
        "Users are responsible for maintaining the confidentiality of their login credentials and any personal information shared on the platform.",
      ],
    },
    {
      id: 4,
      title: "Prohibited Actions",
      content: [
        "Users are prohibited from engaging in activities that violate laws, infringe upon intellectual property rights, or distribute harmful content.",
        "Spamming, phishing, or unauthorized advertising on Stay In Touch is strictly prohibited.",
      ],
    },
    {
      id: 5,
      title: "Limitation of Liability",
      content: [
        "Stay In Touch is not liable for any damages resulting from the use or inability to use our services.",
        "We do not guarantee the accuracy, reliability, or availability of any content or information on Stay In Touch.",
      ],
    },
    {
      id: 6,
      title: "Modifications to Terms",
      content: [
        "We reserve the right to modify or update these Terms at any time without prior notice. Continued use of Stay In Touch after modifications constitutes acceptance of the updated Terms.",
      ],
    },
    {
      id: 7,
      title: "Termination of Access",
      content: [
        "Stay In Touch reserves the right to suspend or terminate access to our platform for users who violate these Terms or engage in activities that compromise the platform's integrity.",
      ],
    },
  ];

  return (
    <MainLayout className="flex w-full justify-center items-start px-4">
      <div className="flex flex-col gap-6 max-w-4xl justify-start items-start">
        <TitlePage
          title="Terms of Use"
          description="Welcome to Stay In Touch! By using our platform, you agree to the following terms and conditions:"
        />
        <div className="flex flex-col gap-4">
          {TermsOfUseData.map((term) => (
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

export default TermsOfUse;
