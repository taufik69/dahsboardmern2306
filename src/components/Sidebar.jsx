import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ListBulletIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  HomeIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <HomeIcon class="h-6 w-6 text-gray-500" />
                </ListItemPrefix>

                <Typography color="blue-gray" className="mr-auto font-normal">
                  Home
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link to="/banner">
                  <ListItem>
                    <ListItemPrefix>
                      <ViewColumnsIcon class="h-6 w-6 text-gray-500" />
                    </ListItemPrefix>
                    Banner
                  </ListItem>
                </Link>
                <Link to={"/category"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ListBulletIcon className="h-6 w-6 text-gray-500" />
                    </ListItemPrefix>
                    Category
                  </ListItem>
                </Link>
                <Link to="/subcategory">
                  <ListItem>
                    <ListItemPrefix>
                      <ListBulletIcon className="h-6 w-6 text-gray-500" />
                    </ListItemPrefix>
                    SubCategory
                  </ListItem>
                </Link>

                <Link to="/flashsale">
                  <ListItem>
                    <ListItemPrefix>
                      <AiOutlineProduct className="h-6 w-6 text-gray-500" />
                    </ListItemPrefix>
                    FlashSale
                  </ListItem>
                </Link>
                <Link to={"/bestSelling"}>
                  <ListItem>
                    <ListItemPrefix>
                      <PresentationChartLineIcon class="h-6 w-6 text-gray-500" />
                    </ListItemPrefix>
                    BestSelling Product
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  E-Commerce
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link to={"/products"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </Link>
              </List>
              <List className="p-0">
                <Link to={"/productslist"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products List
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Link to="/order">
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Order
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <Link to="/contact">
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Contact List
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default Sidebar;
