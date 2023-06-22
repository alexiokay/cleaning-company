import twilio from "twilio";

// make nuxt 3 function
export default async (req: any, res: any) => {
  const playVoiceMessage = () => {
    const accountSid = useRuntimeConfig().TWILIO_ACCOUNT_SID;
    const authToken = useRuntimeConfig().TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = useRuntimeConfig().TWILIO_PHONE_NUMBER;

    console.log("twilioPhoneNumber", twilioPhoneNumber);

    const client = twilio(accountSid, authToken);
    const twiml = new twilio.twiml.VoiceResponse();

    const recipientNumber = "+48797951650";
    const voiceMessageUrl =
      "https://handler.twilio.com/twiml/EHfc538e766ae4d62e10673d73b05d0a0f";

    const call = client.calls.create({
      url: voiceMessageUrl,
      to: recipientNumber,
      from: twilioPhoneNumber,
    });

    call
      .then((result) => {
        console.log("Call SID:", result.sid);
      })
      .catch((error) => {
        console.error("Error making call:", error);
      });
  };

  playVoiceMessage();
};
