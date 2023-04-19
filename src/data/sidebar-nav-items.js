export default function() {
  return [
    {
      title: "Dashboard",
      to: "#",
      htmlBefore: '<i class="material-icons" >edit</i>',
      htmlAfter: ""
    },
    {
      title: "Orders",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "#",
    },
   
    {
      title: "Team Members",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "#",
    },
    {
      title: "Partners",
      htmlBefore: '<i class="material-icons">handshake</i>',
      to: "#",
    },
    {
      title: "Product Listing",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "#",
    },
    {
      title: "Awards & Honours",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "#",
    },
    {
      title: "About Us",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/",
    },
    {
      title: "Payment info",
      htmlBefore: '<i class="material-icons">payment</i>',
      to: "#",
    }
  ];
}
