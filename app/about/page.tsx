// const config = {
//   list: [
//     {
//       title: "Services",
//       items: [
//         "Video Production",
//         "Animated visuals",
//         "Photos",
//         "Stories",
//         "Posters",
//         "Platform stylization",
//         "Content planning",
//         "Marketing",
//       ],
//     },
//     {
//       title: "Clients",
//       items: [
//         {
//           title: "Brands",
//         },
//         {
//           title: "Entrepreneurs",
//           items: [
//             "Barbers",
//             "Tattoo Artists",
//             "Beauty Professionals",
//             "Coaches",
//           ],
//         },
//         {
//           title: "Businesses",
//           items: [
//             "Small",
//             "Medium-Sized",
//             "Gastro (Bars, Cafes, Clubs, Restaurants)",
//           ],
//         },
//         {
//           title: "Specialty Niches",
//           items: [
//             "Events",
//             "Festivals",
//             "TikTok & YouTube Channels",
//             "Real Estate",
//             "Sports",
//           ],
//         },
//       ],
//     },
//     {
//       title: "Process",
//       items: [
//         {
//           title: "Pre-Production",
//           items: [
//             "Location Scouting",
//             "Idea Development",
//             "Realization Options",
//             "Project Planning",
//             "Discussions (Personal or Online)",
//           ],
//         },
//         {
//           title: "Production",
//           items: [
//             "Consultation",
//             "Team Hiring",
//             "Resource Management",
//             "Recording",
//           ],
//         },
//         {
//           title: "Post-Production",
//           items: ["Montage", "Editing", "VFX", "Color Grading", "Sound Design"],
//         },
//       ],
//     },
//     {
//       title: "Pricing",
//       items: [
//         {
//           title: "Determined based on:",
//           items: [
//             "Equipment",
//             "Duration",
//             "Rentals",
//             "Travel",
//             "Models",
//             "Numbers",
//             "Complexity",
//             "etc.",
//           ],
//         },
//       ],
//     },
//   ],
// };

export default function About() {
  return (
    <article className="pt-12 px-4 pb-16">
      <p className="text-[1.75rem] leading-[1] tracking-tighter font-medium mb-20">
        Artem is a professional video creator and content manager specializing
        in unique, bold, and creative visual content for social media. With a
        focus on innovative design, Artem tailors solutions to elevate your
        brand&apos;s presence and storytelling.
      </p>

      <section className="grid grid-cols-2 gap-4 text-[0.75rem] font-[475] leading-[1.15] uppercase">
        <h2>Services</h2>
        <ul>
          <li>Video Production</li>
          <li>Animated visuals</li>
          <li>Photos</li>
          <li>Stories</li>
          <li>Posters</li>
          <li>Platform stylization</li>
          <li>Content planning</li>
          <li>Marketing</li>
        </ul>

        <h2>Clients</h2>
        <ul>
          <li>
            <h3>Brands</h3>
          </li>
          <br />
          <li>
            <h3>Entrepreneurs</h3>
            <p>Barbers, Tattoo Artists, Beauty Professionals, Coaches</p>
          </li>
          <br />
          <li>
            <h3>Businesses</h3>
            <p>Small, Medium-Sized, Gastro (Bars, Cafes, Clubs, Restaurants)</p>
          </li>
          <br />
          <li>
            <h3>Specialty Niches</h3>
            <p>
              Events, Festivals, TikTok & YouTube Channels, Real Estate, Sports
            </p>
          </li>
        </ul>

        <h2>Process</h2>
        <ul>
          <li>
            <h3>Pre-Production</h3>
            <p>
              Location Scouting, Idea Development, Realization Options, Project
              Planning, Discussions (Personal or Online)
            </p>
          </li>
          <br />
          <li>
            <h3>Production</h3>
            <p>Consultation, Team Hiring, Resource Management, Recording</p>
          </li>
          <br />
          <li>
            <h3>Post-Production</h3>
            <p>Montage, Editing, VFX, Color Grading, Sound Design</p>
          </li>
        </ul>

        <h2>Pricing</h2>
        <ul>
          <h3>Determined based on:</h3>
          <ul>
            <li>Equipment</li>
            <li>Duration</li>
            <li>Rentals</li>
            <li>Travel</li>
            <li>Models</li>
            <li>Numbers</li>
            <li>Complexity</li>
            <li>etc.</li>
          </ul>
        </ul>

        <h2>Work Options</h2>
        <ul>
          <li>
            <h3>Solo Projects</h3>
            <p>Single Video Pricing</p>
          </li>
          <br />
          <li>
            <h3>Video Packs</h3>
            <p>
              Packages (2-20 Videos) with Variable Rates Based on Complexity
            </p>
          </li>
          <br />
          <li>
            <h3>Monthly Work</h3>
            <p>
              Comprehensive Service (1-6 Months) with All Additional Options
              Included
            </p>
          </li>
        </ul>
      </section>
    </article>
  );
}
