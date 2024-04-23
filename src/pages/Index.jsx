import { Box, Container, Heading, Text, Button, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaMicrophone, FaBookOpen, FaLanguage } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nfGVufDB8fHx8MTcxMzg2MDc5NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Language Learning" />
        <Heading as="h1" size="2xl" textAlign="center">
          한국어 낭독 습관 형성 서비스
        </Heading>
        <Text fontSize="xl" color={textColor}>
          외국어로서 한국어를 배우는 사람들을 위한 인공지능 음성인식 기술을 활용한 플랫폼입니다.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" bg={bgColor} borderRadius="md">
          <VStack spacing={4}>
            <Button leftIcon={<FaMicrophone />} colorScheme="teal" variant="solid">
              음성 인식 시작
            </Button>
            <Button leftIcon={<FaBookOpen />} colorScheme="orange" variant="outline">
              낭독 연습하기
            </Button>
            <Button leftIcon={<FaLanguage />} colorScheme="cyan" variant="ghost">
              언어 선택
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
