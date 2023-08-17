import twilio from "twilio";

// make nuxt 3 function
export default async (req: any, res: any) => {
  const playVoiceMessage = () => {
    const accountSid = useRuntimeConfig().TWILIO_ACCOUNT_SID;
    const authToken = useRuntimeConfig().TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = useRuntimeConfig().TWILIO_PHONE_NUMBER;
    console.log("twilioPhoneNumber", twilioPhoneNumber);

    const client = twilio(accountSid, authToken);

    const phoneNumber2 = "+48797951650";

    try {
      client.messages
        .create({
          body: "This is the ship that made the Kessel Run in fourteen parsecs?",
          from: twilioPhoneNumber,
          to: phoneNumber2,
        })
        .then((message: any) => console.log(message.sid));

      console.log("Voice message played successfully");
    } catch (error) {
      console.error("Error playing voice message:", error);
    }
  };

  playVoiceMessage();
};
