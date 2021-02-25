-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2021 at 05:42 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fishcommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_product` int(200) NOT NULL,
  `quantity` int(200) NOT NULL,
  `id_user` int(200) NOT NULL,
  `id_seller` varchar(200) NOT NULL,
  `seller` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `id_product`, `quantity`, `id_user`, `id_seller`, `seller`) VALUES
(239, 26, 1, 1, '2', 'adi');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'perikanan'),
(2, 'peternakan');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `id_product` varchar(200) NOT NULL,
  `id_seller` varchar(200) NOT NULL,
  `id_buyer` varchar(200) NOT NULL,
  `date_order` varchar(200) NOT NULL,
  `quantity` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL,
  `delete_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `id_product`, `id_seller`, `id_buyer`, `date_order`, `quantity`, `status`, `delete_time`) VALUES
(91, '20', '2', '1', '23-2-2021', '10', 'accept', '2021-02-23 02:50:38'),
(92, '20', '2', '1', '23-2-2021', '10', 'reject', '2021-02-23 02:51:21'),
(93, '24', '2', '1', '25-2-2021', '1', 'proccess', '2021-02-25 03:06:52'),
(94, '20', '2', '1', '25-2-2021', '1', 'proccess', '2021-02-25 03:06:56'),
(95, '26', '2', '1', '25-2-2021', '1', 'proccess', '2021-02-25 03:07:03');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `id_category` int(200) NOT NULL,
  `id_user` int(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `adding_date` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `stock_product` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product_name`, `id_category`, `id_user`, `image`, `adding_date`, `description`, `price`, `stock_product`) VALUES
(20, 'ikan arwana', 1, 2, 'http://localhost:3200/upload/Capture.PNG', '22-2-2021', 'hahahaha', '250000', '22'),
(22, 'kertas karton', 1, 16, 'http://localhost:3200/upload/Capture.PNG', '23-2-2021', 'ini kertas kartoon', '20000', '12'),
(24, 'ikan patin', 1, 2, 'http://localhost:3200/upload/Capture.PNG', '23-2-2021', 'ikan patin umur 50 tahun', '50000', '4'),
(25, 'cbr250rr', 2, 2, 'http://localhost:3200/upload/cbr250rr.jpg', '25-2-2021', 'desc', '58', '25'),
(26, 'kambing', 2, 2, 'http://localhost:3200/upload/cbr250rr.jpg', '23-2-2021', 'kambing mati,\ndapet nyolong', '20000000', '9');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `stock` int(200) NOT NULL,
  `id_product` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`id`, `stock`, `id_product`) VALUES
(4, 5, 19),
(5, 5, 20),
(7, 10, 22),
(8, 21, 23);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `number_phone` varchar(200) NOT NULL,
  `type` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `number_phone`, `type`) VALUES
(1, 'rohan', 'coding.0', '691rohan@gmail.com', '', 'buyer'),
(2, 'adi', 'coding.0', '691rohan@gmail.com', '', 'seller'),
(3, 'priyatna', 'coding.0', '691rohan@gmail.com', '', ''),
(4, 'priyatna', 'coding.0', '', '', ''),
(5, 'rohan priyatna', 'priyatna.0', 'priyatna@gmail.com', '085524531474', ''),
(6, 'priyatna', 'coding.0', '', '', ''),
(7, 'aris', 'priyatna.0', 'priyatna@gmail.com', '085524531474', ''),
(10, 'priyatna', 'coding.0', '', '', ''),
(11, 'serli', 'coding.0', 'aris@gmail.com', '085891404076', ''),
(12, 'serli', 'coding.0', 'aris@gmail.com', '085891404076', 'user'),
(13, 'serli', 'coding.0', 'aris@gmail.com', '085891404076', 'seller'),
(14, 'serli', 'coding.0', 'aris@gmail.com', '085891404076', 'buyer'),
(15, 'aris', 'jangantau123', 'aris@gmail.com', '085524531474', 'buyer'),
(16, 'priyatna', 'coding.0', '691rohan@gmail.com', '085524531474', 'seller');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
