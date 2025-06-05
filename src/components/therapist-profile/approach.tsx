import { Therapist } from "@/lib/types";
import React from "react";

export default function Approach({ therapist }: { therapist: Therapist }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Therapeutic Approach</h3>
        <p className="text-muted-foreground">
          {`${therapist.name} utilizes an integrative approach
            tailored to each client's unique needs. Drawing from
            evidence-based practices,
            ${therapist.gender === "Female" ? "she" : "he"} creates a
            supportive environment where clients can explore their
            challenges and develop effective coping strategies.`}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Treatment Methods</h3>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Cognitive Behavioral Therapy (CBT)</li>
          <li>Mindfulness-Based Cognitive Therapy</li>
          <li>Solution-Focused Brief Therapy</li>
          <li>Trauma-Informed Care</li>
          <li>Motivational Interviewing</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">What to Expect</h3>
        <p className="text-muted-foreground">
          {`In your first session, ${therapist.name} will take time
            to understand your concerns, goals, and history.
            Together, you'll develop a personalized treatment plan
            focused on your specific needs. Sessions are
            collaborative, respectful, and focused on helping you
            achieve meaningful change.`}
        </p>
      </div>
    </div>
  );
}
